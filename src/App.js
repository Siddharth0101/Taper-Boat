import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
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
