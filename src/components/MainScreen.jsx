import React from "react";
import { DesktopDisplay } from "./desktop/DesktopDisplay";
import { MobileDisplay } from "./mobile/MobileDisplay";
import { useBreakpointValue } from "@chakra-ui/react";

export const MainScreen = () => {
  const deviceType = useBreakpointValue({
    base: "mobile",
    md: "smallTablet",
    lg: "desktop",
  });
  return deviceType === "desktop" ? <DesktopDisplay /> : <MobileDisplay />;
};
