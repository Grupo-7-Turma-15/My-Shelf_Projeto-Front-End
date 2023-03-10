import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import { BookProvider } from "../providers/BookContext";
import { ProtectedRoutes } from "./ProtectedRoute";

const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/register" element={<RegisterPage />} />

    <Route element={<ProtectedRoutes />}>
      <Route
        path="/dashboard"
        element={
          <BookProvider>
            <Dashboard />
          </BookProvider>
        }
      />
    </Route>
  </Routes>
);

export default Router;
