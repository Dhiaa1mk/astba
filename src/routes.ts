import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Services from "./pages/Services";
import Membership from "./pages/Membership";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "courses", Component: Courses },
      { path: "services", Component: Services },
      { path: "membership", Component: Membership },
      { path: "events", Component: Events },
      { path: "blog", Component: Blog },
      { path: "contact", Component: Contact },
      { path: "faq", Component: FAQ },
      { path: "privacy", Component: PrivacyPolicy },
      { path: "terms", Component: TermsOfService },
      { path: "*", Component: NotFound },
    ],
  },
]);
