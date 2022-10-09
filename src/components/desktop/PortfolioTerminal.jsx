import React, { useEffect, useContext } from "react";
import { DesktopContext } from "./DesktopDisplay";
import Terminal from "react-terminal-ui";
import { Box } from "@chakra-ui/react";
import { useTerminalCommandsHook } from "../../utils/useTerminalCommandsHook";

export const PortfolioTerminal = () => {
  const { terminalOutput, handleTerminalInput } = useTerminalCommandsHook();
  const { zIndexes, handleSetAsTopScreen } = useContext(DesktopContext);

  useEffect(() => {
    handleSetAsTopScreen("terminal");
  }, []);
  return (
    <Box
      w={"80%"}
      boxShadow={"dark-lg"}
      zIndex={zIndexes["terminal"]}
      onClick={() => handleSetAsTopScreen("terminal")}
      resize="both"
      overflow={"auto"}
    >
      <Terminal
        name="~/agustin_franchetti/portfolio"
        onInput={(terminalInput) => handleTerminalInput(terminalInput)}
      >
        {terminalOutput}
      </Terminal>
    </Box>
  );
};
