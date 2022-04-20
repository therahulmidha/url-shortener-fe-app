import { Home } from "./components/Home/Home";
import { NotFound } from "./components/NotFound/NotFound";
import { Plans } from "./components/Plans/Plans";
import { QuickHelp } from "./components/QuickHelp/QuickHelp";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/help",
    element: <QuickHelp />,
  },
  {
    path: "/plans",
    element: <Plans />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
