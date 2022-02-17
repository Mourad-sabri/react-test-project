import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

//  pages

import Home from "./pages/Home";
import Login from "./pages/Login";
import Posts from "./pages/Posts";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/posts"
          element={
            <ProtectedRoute>
              <Posts />
            </ProtectedRoute>
          }
        />
      </Routes>
    </React.Fragment>
  );
};

export default App;
