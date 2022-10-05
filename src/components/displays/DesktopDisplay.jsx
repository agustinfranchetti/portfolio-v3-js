import React, { useState } from "react";
import { Button, Box, Flex } from "@chakra-ui/react";
import { AboutMe } from "../aboutMe/AboutMe";
import { PortfolioTerminal } from "../PortfolioTerminal";
import { FinderWindow } from "../finderWindow/FinderWindow";

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

export const DesktopDisplay = () => {
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
      backgroundPosition="center"
      position={"absolute"}
    >
      <AboutMe />
      <Flex
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
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
        {showTerminal && <PortfolioTerminal />}
        {showSocialMedia && <FinderWindow />}
      </Flex>
    </Box>
  );
};
