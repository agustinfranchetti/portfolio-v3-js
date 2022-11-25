import React, { useState, createContext } from "react";
import { Flex, Grid, GridItem, Stack, Image, Text } from "@chakra-ui/react";
import { PortfolioTerminal } from "./PortfolioTerminal";
import { MailWindow } from "./Mail/MailWindow";
import { GithubWindow } from "./Github/GithubWindow";

const buttonMacIconDict = {
  terminal:
    "https://res.cloudinary.com/dw4okqkrq/image/upload/v1665098778/portfolio-macos-ios/terminal_hbdjv9.png",
  mail: "https://res.cloudinary.com/dw4okqkrq/image/upload/v1669236648/portfolio-macos-ios/02cd7ad94a71a0097ae1d9ee12eb1519_Mail_512x512x32_w1sw7y.webp",
  github:
    "https://res.cloudinary.com/dw4okqkrq/image/upload/v1669236851/portfolio-macos-ios/ea5080d827c0e306fc9f7233ea45cb1e_Github_Desktop_512x512x32_caoaan.webp",
};

export const DesktopContext = createContext({});

const ShowcontentButton = ({ iconLabel, showVariable, setShowVariable }) => {
  return (
    <Flex
      direction={"row"}
      borderRadius="10px"
      p="10px"
      alignItems="center"
      justifyContent="flex-start"
      _hover={{ backgroundColor: "whiteAlpha.200" }}
      backgroundColor={showVariable ? "whiteAlpha.200" : null}
    >
      <Image
        w={"80px"}
        src={buttonMacIconDict[iconLabel]}
        onClick={() => setShowVariable(!showVariable)}
      />
    </Flex>
  );
};

export const DesktopDisplay = () => {
  const [showTerminal, setShowTerminal] = useState(true);
  const [showGithub, setShowGithub] = useState(false);
  const [showMail, setShowMail] = useState(false);
  const [zIndexes, setZIndexes] = useState({
    terminal: 0,
    github: 0,
    mail: 0,
  });

  const handleSetAsTopScreen = (screen) => {
    const newZIndexes = { ...zIndexes };
    const highestZIndex = Math.max(...Object.values(newZIndexes));
    newZIndexes[screen] = highestZIndex + 1;
    setZIndexes(newZIndexes);
  };

  return (
    <DesktopContext.Provider
      value={{
        zIndexes,
        handleSetAsTopScreen,
        setShowTerminal,
        setShowGithub,
        setShowMail,
      }}
    >
      <Grid
        h="100vh"
        w="100vw"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
        backgroundImage={
          "url(https://res.cloudinary.com/dw4okqkrq/image/upload/v1665277437/portfolio-macos-ios/11-0-Color-Day_1_kikk1d.webp)"
        }
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <GridItem rowSpan={5} colSpan={2} my={"auto"}>
          {/* <AboutMe /> */}
          <Stack
            width="fit-content"
            backgroundColor={"whiteAlpha.400"}
            borderRadius="10px"
            justifyContent={"center"}
          >
            <ShowcontentButton
              iconLabel="terminal"
              showVariable={showTerminal}
              setShowVariable={setShowTerminal}
            />
            <ShowcontentButton
              iconLabel="mail"
              showVariable={showMail}
              setShowVariable={setShowMail}
            />
            <ShowcontentButton
              iconLabel="github"
              showVariable={showGithub}
              setShowVariable={setShowGithub}
            />
          </Stack>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4}>
          {showMail && <MailWindow />}
        </GridItem>
        <GridItem
          rowSpan={3}
          colSpan={4}
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          {showTerminal && <PortfolioTerminal />}
          {showGithub && <GithubWindow />}
        </GridItem>
        <GridItem colSpan={2}></GridItem>
        <GridItem colSpan={2} />
        <GridItem colSpan={4} />
        <Text
          color="white"
          position="absolute"
          bottom="10px"
          right="10px"
          fontFamily={"monospace"}
          fontSize={"sm"}
        >
          {"Created with <3 by Agustin Franchetti "}
        </Text>
      </Grid>
    </DesktopContext.Provider>
  );
};
