import React from "react";
import PrivateContext from "../Auth/Context/PrivateContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth } from "../Auth/Context/UserContext";

const Profile = () => {
  const { user } = useAuth();

  const logUser = () => {
    console.log(user);
  };
  logUser();
  return (
    <>
      <PrivateContext>
        <Navbar />
        <h1>Profile Page</h1>
        <p>{user?.email}</p>
        <p>{user?.metadata.creationTime}</p>
        <Footer />
      </PrivateContext>
    </>
  );
};

export default Profile;
