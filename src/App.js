import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import AuthReg from "./pages/Auth/AuthReg";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Home />,
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
