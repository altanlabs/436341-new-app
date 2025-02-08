import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/theme/theme-provider";
import RootBoundary from "./components/errors/RootBoundary";
import { Paw, Stethoscope, ShoppingBag, Heart, Info } from "lucide-react";

import Layout from "./layout";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";
import { useTheme } from "./theme/use-theme";

const App = () => {
  const { theme } = useTheme();

  const sidebarConfig = {
    items: [
      {
        label: "Inicio",
        href: "/",
        icon: <Paw className="h-4 w-4" />,
      },
      {
        label: "Veterinarios",
        href: "/veterinarios",
        icon: <Stethoscope className="h-4 w-4" />,
      },
      {
        label: "Productos",
        href: "/productos",
        icon: <ShoppingBag className="h-4 w-4" />,
      },
      {
        label: "Consejos",
        href: "/consejos",
        icon: <Heart className="h-4 w-4" />,
      },
      {
        label: "Emergencias",
        href: "/emergencias",
        icon: <Info className="h-4 w-4" />,
      },
    ],
    companyName: "PetCare",
    defaultOpen: true,
  };

  const headerConfig = {
    title: "PetCare",
    navigation: [
      { label: "Servicios", href: "/servicios" },
      { label: "Productos", href: "/productos" },
      { label: "Contacto", href: "/contacto" },
    ],
    showNotifications: true,
    showUserMenu: true,
    showThemeToggle: true,
  };

  const footerConfig = {
    text: "© 2024 PetCare. Cuidando a tus mascotas.",
    links: [
      { label: "Privacidad", href: "/privacidad" },
      { label: "Términos", href: "/terminos" },
      { label: "Contacto", href: "/contacto" },
    ],
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout 
          showSidebar={true}
          showHeader={true}
          showFooter={true}
          sidebarConfig={sidebarConfig}
          header={headerConfig}
          footer={footerConfig}
        />
      ),
      errorElement: <RootBoundary />,
      children: [
        {
          index: true,
          element: <Index />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Theme appearance={theme === "system" ? "light" : theme}>
        <div className={theme}>
          <RouterProvider router={router} />
        </div>
      </Theme>
    </ThemeProvider>
  );
};

export default App;