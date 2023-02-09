import React from "react";
import { Outlet } from "react-router-dom";
import MyFooter from "../Components/MyFooter/MyFooter";
import Navigation from "../Components/Navigation/Navigation";

const MainLayout = () => {
  return (
    <>
      <section className="min-h-[100vh]">
        <Navigation></Navigation>
        <Outlet></Outlet>
      </section>
      <MyFooter />
    </>
  );
};

export default MainLayout;
