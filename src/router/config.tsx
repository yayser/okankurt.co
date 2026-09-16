import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Portfolio from "../pages/portfolio/page";
import ProjectDetail from "../pages/project/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/project/:id",
    element: <ProjectDetail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
