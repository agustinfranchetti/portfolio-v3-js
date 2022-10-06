import React from "react";
import { Box } from "@chakra-ui/react";

export const FinderWindow = () => {
  return (
    <Box
      width="600px"
      height="400px"
      backgroundColor="white"
      borderRadius="10px"
      padding="10px"
      mr={"200px"}
      boxShadow="dark-lg"
      position={"absolute"}
      zIndex={2}
    />
  );
};
