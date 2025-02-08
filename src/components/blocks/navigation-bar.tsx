import { HomeIcon, UserGroupIcon, ShoppingBagIcon, BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigationItems = [
  {
    name: "Home",
    icon: HomeIcon,
    href: "/",
  },
  {
    name: "Peludos",
    icon: UserGroupIcon,
    href: "/pets",
  },
  {
    name: "Servicios",
    icon: BuildingStorefrontIcon,
    href: "/services",
  },
  {
    name: "Tienda",
    icon: ShoppingBagIcon,
    href: "/store",
  },
  {
    name: "Social",
    icon: UserGroupIcon,
    href: "/social",
  },
];

export function NavigationBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex flex-col items-center py-2 px-3 text-gray-600 dark:text-gray-300 hover:text-primary"
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}