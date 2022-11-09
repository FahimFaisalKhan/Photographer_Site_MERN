import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { MyAuthContext } from "../../Contexts/AuthContext/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(MyAuthContext);
  const location = useLocation();
  if (loading) {
    return <div>Loading.....</div>;
  }
  if (!user) {
    return (
      <Navigate to={"/signin"} state={{ form: location }} replace={true} />
    );
  }

  return children;
};

export default PrivateRoute;
