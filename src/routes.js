import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";

import Authentication from "./pages/Authentication/Authentication";
import MachineLearning from "./pages/MachineLearning/MachineLearning";
import Hosting from "./pages/Hosting/Hosting";
import Functions from "./pages/Functions/Functions";
import Database from "./pages/Database/Database";
import Storage from "./pages/Storage/Storage";

import MDAvatar from "components/MDAvatar";

// @mui icons
import { Cloud, AcUnit } from "@mui/icons-material";

// Images
import profilePicture from "./assets/images/team-3.jpg";

const routes = [
  {
    type: "collapse",
    name: "Brooklyn Alice",
    key: "brooklyn-alice",
    icon: <MDAvatar src={profilePicture} alt="Brooklyn Alice" size="sm" />,
    collapse: [
      {
        name: "My Profile",
        key: "my-profile",
        route: "/pages/profile/profile-overview",
        component: <Profile />,
      },
      {
        name: "Settings",
        key: "profile-settings",
        route: "/pages/account/settings",
        component: <Settings />,
      },
    ],
  },
  { type: "divider", key: "divider-0" },
  {
    type: "collapse",
    name: "Analytics",
    key: "analytics1",
    route: "/dashboards/analytics",
    component: <Authentication />,
    icon: <AcUnit fontSize="medium">receipt_long</AcUnit>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Tutorial",
    key: "tutorial",
    icon: <AcUnit fontSize="medium">shopping_basket</AcUnit>,
    collapse: [
      {
        name: "Authentication",
        key: "authentication",
        route: "/tutorial/authentication",
        component: <Authentication />,
      },
      {
        name: "MachineLearning",
        key: "Machine-learning",
        route: "/tutorial/machine-learning",
        component: <MachineLearning />,
      },
      {
        name: "Storage",
        key: "storage",
        route: "/tutorial/storage",
        component: <Storage />,
      },
      {
        name: "Functions",
        key: "functions",
        route: "/tutorial/Functions",
        component: <Functions />,
      },
      {
        name: "Database",
        key: "database",
        route: "/tutorial/database",
        component: <Database />,
      },
      {
        name: "Hosting",
        key: "hosting",
        route: "/tutorial/hosting",
        component: <Hosting />,
      },
    ],
  },
  { type: "divider", key: "divider-1" },
  { type: "title", title: "Resources", key: "title-docs" },
  {
    type: "collapse",
    name: "2cluster",
    key: "2cluster",
    href: "https://www.creative-tim.com/learning-lab/react/functions/material-dashboard/",
    icon: <Cloud />,
    noCollapse: true,
  },
];

export default routes;
