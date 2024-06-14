import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Almond from "./pages/Almond/Almond";
import { useSelector } from "react-redux";
import AlertLogin from "./components/Alert/AlertLogin";
import Search from "./components/Search/Search";
import AboutUs from "./pages/About Us/About Us";

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
        {
          path: "/aboutus",
          element: <AboutUs />,
        },
      ],
    },
  ]);
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        margin: 0,
      }}
    >
      <RouterProvider router={router} />
      <Search />
    </div>
  );
}

export default App;
