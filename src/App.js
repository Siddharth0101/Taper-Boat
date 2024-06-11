import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Almond from "./pages/Almond/Almond";
import { useSelector } from "react-redux";
import Auth from "./pages/Auth/Auth";
import { useState } from "react";
import AlertLogin from "./components/Alert/AlertLogin";

function App() {
  const isLogged = useSelector((state) => state.LoginStore.isLogged);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/almond",
          element: <div>{isLogged ? <Almond /> : <AlertLogin />}</div>,
        },
      ],
    },
  ]);
  return (
    <div
      style={{
        backgroundColor: "gray",
        height: "100vh",
        width: "100vw",
        margin: 0,
      }}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
