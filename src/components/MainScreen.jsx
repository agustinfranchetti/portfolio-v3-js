import React, { useState, createContext } from "react";
import { PortfolioTerminal } from "./PortfolioTerminal";
import { Button, Box, Flex } from "@chakra-ui/react";
import { AboutMe } from "./aboutMe/AboutMe";
import { FinderWindow } from "./finderWindow/FinderWindow";

const ShowcontentButton = ({ iconLabel, showVariable, setShowVariable }) => {
  return (
    <Button
      colorScheme="whiteAlpha"
      variant="solid"
      onClick={() => setShowVariable(!showVariable)}
      mb="10px"
    >
      {showVariable ? "Hide" : "Show"} {iconLabel}
    </Button>
  );
};

export const MainScreen = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const [showSocialMedia, setShowSocialMedia] = useState(false);

  return (
    <Box
      width="100vw"
      height="100vh"
      backgroundImage={
        "url(https://512pixels.net/downloads/macos-wallpapers/11-0-Color-Day.jpg)"
      }
      backgroundSize="cover"
    >
      <Flex alignItems="flex-start" p={20} gap={100}>
        <Box>
          <AboutMe />
          <Box
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            flexDirection={"column"}
            width="100%"
            display="flex"
          >
            <ShowcontentButton
              iconLabel="terminal"
              showVariable={showTerminal}
              setShowVariable={setShowTerminal}
            />
            <ShowcontentButton
              iconLabel="social media"
              showVariable={showSocialMedia}
              setShowVariable={setShowSocialMedia}
            />
          </Box>
        </Box>
        <Box>
          {showTerminal && <PortfolioTerminal />}
          {showSocialMedia && <FinderWindow />}
        </Box>
      </Flex>
    </Box>
  );
};
