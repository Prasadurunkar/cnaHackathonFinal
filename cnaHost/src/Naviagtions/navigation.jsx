import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Home from "../Home";
import App from "../App";

const FirstApp = lazy(() => import("FIRST_APP/app"));
const SecondApp = lazy(() => import("SECOND_APP/app"));
const mainRoutes = [
 {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/getQuote",
            element: 
            <div>
            <Suspense fallback={<span>Loading...</span>}>
              <FirstApp />
            </Suspense>
            </div>
        },
        {
          path: "/quote",
          element:
          <div>
          <Suspense fallback={<span>Loading...</span>}>
            <SecondApp />
          </Suspense>
          </div>

      }
    ]
 }
];

const Navigation = () => {
  const element = useRoutes(mainRoutes);
  return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>;
};

export default Navigation;
