
/* eslint-disable react/prop-types */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import HireDriver from "./HireDriver";
import DriverProfile from './DriverProfile'
import { createContext, useContext, useState } from "react";

// const context = createContext()

// Better context name
const DriverContext = createContext();

const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: "/",
  },
  {
    element: <HireDriver />,
    path: "/hire",
  },
  {
    element:<DriverProfile/>,
    path:"/profile",
  }
]);

function ProviderContext({ children }) {
  const [driver, setDriver] = useState(null); // set default if needed
  const [showFilter, setShowFilter] = useState(false)

  return (
    <DriverContext.Provider value={{ driver, setDriver, showFilter, setShowFilter }}>
      {children}
    </DriverContext.Provider>
  );
}

// Custom hook to access context
export function useDriverContext() {
  const ctx = useContext(DriverContext);
  if (!ctx) {
    throw new Error("useDriverContext must be used within a ProviderContext");
  }
  return ctx;
}

// Entry flow
function Flow() {
  return (
    <ProviderContext>
      <RouterProvider router={router} />
    </ProviderContext>
  );
}

export default Flow;

