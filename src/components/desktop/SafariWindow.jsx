import React, { useEffect, useContext } from "react";
import { DesktopContext } from "./DesktopDisplay";
import { Box } from "@chakra-ui/react";

export const SafariWindow = () => {
  const { zIndexes, handleSetAsTopScreen } = useContext(DesktopContext);

  useEffect(() => {
    handleSetAsTopScreen("safari");
  }, []);

  return (
    <Box
      width="600px"
      height="400px"
      backgroundColor="gray.700"
      borderRadius="10px"
      padding="10px"
      mr={"200px"}
      boxShadow="dark-lg"
      position={"absolute"}
      zIndex={zIndexes["safari"]}
      onClick={() => handleSetAsTopScreen("safari")}
      resize="both"
      overflow={"auto"}
    />
  );
};
