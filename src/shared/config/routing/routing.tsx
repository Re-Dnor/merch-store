import { lazy } from "react";

const HomePage = lazy(() => import("pages/home"));
const MadeInAlfaPage = lazy(() => import("pages/made-in-alfa"));
const YourDesignPage = lazy(() => import("pages/your-design"));
const ContactsPage = lazy(() => import("pages/contacts"));
const BasketPage = lazy(() => import("pages/basket"));
const ProductPage = lazy(() => import("pages/product"));
const NotFoundPage = lazy(() => import("pages/not-found"));

export const RoutingPaths = [
  {
    path: "/Merch-store",
    element: <HomePage />,
    name: "home",
  },
  {
    path: "/Merch-store/made-in-alfa",
    element: <MadeInAlfaPage />,
    name: "madeInAlfa",
  },
  {
    path: "/Merch-store/your-design",
    element: <YourDesignPage />,
    name: "yourDesign",
  },
  {
    path: "/Merch-store/contacts",
    element: <ContactsPage />,
    name: "contacts",
  },
  {
    path: "Merch-store//basket",
    element: <BasketPage />,
    name: "basket",
  },
  {
    path: "/Merch-store/products/:id",
    element: <ProductPage />,
    name: "product",
  },
  {
    path: "*",
    element: <NotFoundPage />,
    name: "notFound",
  },
];
