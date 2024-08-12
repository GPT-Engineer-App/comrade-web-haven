import { Hammer, Book, Users, BarChart3 } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "The People's Home",
    to: "/",
    icon: <Hammer className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Manifesto",
    to: "/manifesto",
    icon: <Book className="h-4 w-4" />,
    page: <div>Manifesto Page</div>,
  },
  {
    title: "Collective",
    to: "/collective",
    icon: <Users className="h-4 w-4" />,
    page: <div>Collective Page</div>,
  },
  {
    title: "Five-Year Plan",
    to: "/five-year-plan",
    icon: <BarChart3 className="h-4 w-4" />,
    page: <div>Five-Year Plan Page</div>,
  },
];
