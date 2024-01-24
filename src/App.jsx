import React from "react";
import Root from "./pages/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import { ConfigProvider } from "antd";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
const App = () => {
  return (
    <>
      <ConfigProvider 
      theme={{
        token: {
          colorPrimary: "#bc8e5c"
        }
      }}
      >
        <RouterProvider router={router}>
          <Root />
        </RouterProvider>
      </ConfigProvider>
    </>
  );
};

export default App;
