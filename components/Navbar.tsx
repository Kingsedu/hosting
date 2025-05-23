"use client";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import LeftSide from "./LeftSide";
import Logo from "./Logo";

const Navbar = () => {
  useState();
  useEffect(() => {});
  return (
    <div className="bg-white shadow-lg w-full h-[90px] fixed top-0 left-0 flex justify-between items-center p-12 mb-[20px] z-50">
      <Logo />
      <LeftSide />
    </div>
  );
};

export default Navbar;
