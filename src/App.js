import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import MDBox from "./components/MDBox";

import Configurator from "./components/Configurator";
import Sidenav from "./components/Sidenav";

import theme from "assets/theme";
import themeDark from "assets/theme-dark";

import routes from "routes";

import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";

// import { withAuthenticator } from "@aws-amplify/ui-react";
// import { Header } from "components/Authenticator/Header";
// import { Footer } from "components/Authenticator/Footer";
// import { SignInHeader } from "components/Authenticator/SignInHeader";
// import { SignInFooter } from "components/Authenticator/SignInFooter";

// import Amplify from "aws-amplify";
// import config from "./aws-exports";
// import "@aws-amplify/ui-react/styles.css";

import {
  useMaterialUIController,
  setMiniSidenav,
  setOpenConfigurator,
} from "./context";

// Amplify.configure(config);

export default function App({ signOut, user }) {
  console.log(user);

  // const [title, setTitle] = useState(null);
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);

  const { pathname } = useLocation();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () =>
    setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        console.log(route.key);
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
      <button onClick={signOut}>Sign out</button>
    </MDBox>
  );

  // useEffect(() => {
  //   const parsedTitle = location.pathname.replace(/\W/g, " ");
  //   setTitle(parsedTitle);
  // }, [location]);

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={
              (transparentSidenav && !darkMode) || whiteSidenav
                ? brandDark
                : brandWhite
            }
            brandName="Material Dashboard PRO"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {configsButton}
        </>
      )}
      {layout === "vr" && <Configurator />}
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/dashboards/analytics" />} />
      </Routes>
    </ThemeProvider>
  );
}

// export default withAuthenticator(App, {
//   components: {
//     Header,
//     SignIn: {
//       Header: SignInHeader,
//       Footer: SignInFooter,
//     },
//     SignUp: {
//       Header: SignInHeader,
//       Footer: SignInFooter,
//     },
//     Footer,
//   },
//   hideSignUp: true,
// });
