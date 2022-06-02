import React, { useContext } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div>
      <nav>Nav</nav>
      <h1>Dashboard</h1>
      <Link to="/login" onClick={() => logout()}>
        Logout
      </Link>
    </div>
  );
}
