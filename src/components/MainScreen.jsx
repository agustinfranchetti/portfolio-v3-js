import React from "react";
import { DesktopDisplay } from "./displays/DesktopDisplay";
import { MobileDisplay } from "./displays/MobileDisplay";

export const MainScreen = () => {
  const isMobile = window.innerWidth < 600;
  return isMobile ? <MobileDisplay /> : <DesktopDisplay />;
};
