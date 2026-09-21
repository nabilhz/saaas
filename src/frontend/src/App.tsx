import { Layout } from "@/components/Layout";
import AboutPage from "@/pages/AboutPage";
import ControlRoomPage from "@/pages/ControlRoomPage";
import CountryNodesPage from "@/pages/CountryNodesPage";
import GovernancePage from "@/pages/GovernancePage";
import HomePage from "@/pages/HomePage";
import PilotPage from "@/pages/PilotPage";
import PlatformPage from "@/pages/PlatformPage";
import PrivacyPage from "@/pages/PrivacyPage";
import ResourcesPage from "@/pages/ResourcesPage";
import SolutionsPage from "@/pages/SolutionsPage";
import WhySaaasPage from "@/pages/WhySaaasPage";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: Layout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const whySaaasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/why-saaas",
  component: WhySaaasPage,
});

const platformRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/platform",
  component: PlatformPage,
});

const governanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance",
  component: GovernancePage,
});

const controlRoomRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/control-room",
  component: ControlRoomPage,
});

const solutionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/solutions",
  component: SolutionsPage,
});

const countryNodesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/country-nodes",
  component: CountryNodesPage,
});

const resourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/resources",
  component: ResourcesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const pilotRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pilot",
  component: PilotPage,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy",
  component: PrivacyPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  whySaaasRoute,
  platformRoute,
  governanceRoute,
  controlRoomRoute,
  solutionsRoute,
  countryNodesRoute,
  resourcesRoute,
  aboutRoute,
  pilotRoute,
  privacyRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
