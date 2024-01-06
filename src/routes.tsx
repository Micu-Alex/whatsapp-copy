import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default router;
