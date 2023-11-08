// External imports
import React from "react";
import { RouterProvider } from "react-router-dom";

// Internal imports
import router from "router/Router";
import CookieBanner from "tw-components/CookieBanner"

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <CookieBanner/>
    </>
  );
}
