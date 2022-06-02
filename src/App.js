import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import React from "react";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/app" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/app" />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
