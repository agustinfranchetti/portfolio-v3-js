import React, { useEffect, useContext } from "react";
import { DesktopContext } from "./DesktopDisplay";
import { Box } from "@chakra-ui/react";

export const FinderWindow = () => {
  const { zIndexes, handleSetAsTopScreen } = useContext(DesktopContext);

  useEffect(() => {
    handleSetAsTopScreen("finder");
  }, []);
  return (
    <Box
      width="600px"
      height="400px"
      backgroundColor="gray.500"
      borderRadius="10px"
      padding="10px"
      mr={"200px"}
      boxShadow="dark-lg"
      position={"absolute"}
      zIndex={zIndexes["finder"]}
      onClick={() => handleSetAsTopScreen("finder")}
      resize="both"
      overflow={"auto"}
    />
  );
};
