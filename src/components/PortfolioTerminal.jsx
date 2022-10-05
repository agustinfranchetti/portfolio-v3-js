import React from "react";

import Terminal from "react-terminal-ui";
import { Box } from "@chakra-ui/react";
import { useTerminalCommandsHook } from "../utils/useTerminalCommandsHook";

export const PortfolioTerminal = () => {
  const { terminalOutput, handleTerminalInput } = useTerminalCommandsHook();
  return (
    <Box w={"800px"}>
      <Terminal
        name="~/agustin_franchetti/portfolio"
        onInput={(terminalInput) => handleTerminalInput(terminalInput)}
      >
        {terminalOutput}
      </Terminal>
    </Box>
  );
};
