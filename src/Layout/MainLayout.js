import React from "react";
import { Outlet } from "react-router-dom";
import MyFooter from "../Components/MyFooter/MyFooter";
import Navigation from "../Components/Navigation/Navigation";

const MainLayout = () => {
  return (
    <section>
      <Navigation></Navigation>
      <Outlet></Outlet>
      <MyFooter />
    </section>
  );
};

export default MainLayout;
