import React, { useEffect, useContext } from "react";
import { DesktopContext } from "./DesktopDisplay";
import Terminal from "react-terminal-ui";
import { Box, Flex } from "@chakra-ui/react";
import { useTerminalCommandsHook } from "../../utils/useTerminalCommandsHook";
import { TaskbarButtons } from "./TaskbarButtons";

export const PortfolioTerminal = () => {
  const { terminalOutput, handleTerminalInput } = useTerminalCommandsHook();
  const { zIndexes, handleSetAsTopScreen, setShowTerminal } =
    useContext(DesktopContext);

  useEffect(() => {
    handleSetAsTopScreen("terminal");
  }, []);

  const terminalZIndex = zIndexes["terminal"];
  const buttonsZIndex = zIndexes["terminal"] + 1;
  return (
    <Box
      w={"80%"}
      boxShadow={"dark-lg"}
      zIndex={terminalZIndex}
      onClick={() => handleSetAsTopScreen("terminal")}
      resize="both"
      overflow={"auto"}
    >
      <Terminal
        name="~/agustin_franchetti/portfolio"
        onInput={(terminalInput) => handleTerminalInput(terminalInput)}
      >
        <Flex
          mt={-16}
          zIndex={buttonsZIndex}
          ml={-10}
          position={"absolute"}
          backgroundColor={"#252a33"}
          width={"100px"}
        >
          <TaskbarButtons setWindowOpenFunction={setShowTerminal} />
        </Flex>
        {terminalOutput}
      </Terminal>
    </Box>
  );
};
