import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import PrivateRoute from "./components/Router/PrivateRoute";
import RestrictedRoute from "./components/Router/RestrictedRoute";

const LoginPage = lazy(() => import("./pages/LoginPage/index"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/index"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/index"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/index"));

export default function Router() {
  return (
    <Suspense fallback={<div>Loading the page...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts">
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts">
                <RegistrationPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
