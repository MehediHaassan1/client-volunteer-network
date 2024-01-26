import React, { useContext } from "react";
import { UserContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(UserContext);
    let location = useLocation();

    if (loading) {
        return <div className="max-w-7xl mx-auto text-3xl font-bold my-10">Loading ...</div>;
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>;
};

export default PrivateRoute;
