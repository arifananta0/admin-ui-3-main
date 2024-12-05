import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ForgotPassword from "./components/Fragments/ForgotPassword";
import ErrorRouter from "./pages/errorRouter";
import { useState, useEffect } from 'react';
import Dashboard from "./pages/Dashboard";
import Balance from './pages/Balance';
import Goals from "./pages/Goals";
const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      // element: <ProtectedRoute element={<Dashboard />} />,
      element: <Dashboard />,
      errorElement: <ErrorRouter />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/balance",
      element: <Balance />,
    },
    {
      path: "/Goals",
      element: <Goals />,
    },
  ]);

  return <RouterProvider router={myRouter} />;
};

export default App;