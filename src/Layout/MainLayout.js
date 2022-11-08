import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation/Navigation";

const MainLayout = () => {
  return (
    <section>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </section>
  );
};

export default MainLayout;
