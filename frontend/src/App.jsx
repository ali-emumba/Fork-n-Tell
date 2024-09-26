import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "./Pages/HomePage";
import RootLayout from "./RootLayout";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to={"/signin"} />} /> */}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<RootLayout />}>
            <Route path="/home" element={<HomePage />} />
          </Route>
        </Route>

        {/* Catch-all route for unknown paths */}
        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
}

export default App;
