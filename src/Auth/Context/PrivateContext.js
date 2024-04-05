import React from "react";
import { useAuth } from "./UserContext";
import { useNavigate } from "react-router-dom";

const PrivateContext = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/SignIn");
    return null;
  }
  return <div>{children}</div>;
};

export default PrivateContext;
