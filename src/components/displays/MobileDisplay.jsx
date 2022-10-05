import React from "react";
import { MobileAboutMe } from "../aboutMe/AboutMe";
import {
  Box,
  Text,
  Grid,
  Button,
  Flex,
  Stack,
  IconButton,
} from "@chakra-ui/react";

const rowIconsDict = {
  1: {
    1: "linkedin",
    2: "github",
    3: "twitter",
    4: "instagram",
  },
  2: {
    1: "linkedin",
    2: "github",
    3: "twitter",
    4: "instagram",
  },
  3: {
    1: "linkedin",
    2: "github",
    3: "twitter",
    4: "instagram",
  },
  4: {
    1: "phone",
    2: "telegram",
    3: "email",
    4: "document",
  },
};

const iconIconsDict = {
  linkedin: "https://img.icons8.com/color/256/000000/linkedin.png",
  github: "https://img.icons8.com/color/256/000000/github--v1.png",
  twitter: "https://img.icons8.com/color/256/000000/twitter--v1.png",
  instagram: "https://img.icons8.com/color/256/000000/instagram-new--v1.png",
  maps: "https://img.icons8.com/color/256/000000/google-maps-new.png",
  email: "https://img.icons8.com/color/256/000000/email.png",
  phone: "https://img.icons8.com/color/256/000000/phone.png",
  telegram: "https://img.icons8.com/color/256/000000/telegram-app--v1.png",
  document: "https://img.icons8.com/color/256/000000/document.png",
};

const IconRowButton = ({ label }) => {
  return (
    <Stack textAlign={"center"}>
      <Button
        colorScheme="whiteAlpha"
        variant="ghost"
        onClick={() => console.log("clicked")}
        h="16"
        w="16"
        bgImage={`url(${iconIconsDict[label]})`}
        bgSize="cover"
      />
      <Text color={"white"} fontSize={"sm"}>
        {label}
      </Text>
    </Stack>
  );
};

const IconsRow = ({ rowNumber }) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignContent={"space-between"}
      justifyItems={"space-between"}
      alignItems={"space-between"}
    >
      {Object.keys(rowIconsDict[rowNumber]).map((key) => (
        <IconRowButton label={rowIconsDict[rowNumber][key]} />
      ))}
    </Flex>
  );
};

export const MobileDisplay = () => {
  return (
    <Box
      width="100%"
      height="100%"
      backgroundImage={
        "url(https://512pixels.net/downloads/macos-wallpapers/11-0-Color-Day.jpg)"
      }
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <MobileAboutMe />
      <Grid
        templateRows="repeat(5, 1fr)"
        // backgroundColor="red"
        mx={5}
        mt={5}
        height="fit-content"
        gap={2}
      >
        <IconsRow rowNumber={1} />
        <IconsRow rowNumber={2} />
        <IconsRow rowNumber={3} />
        <Grid />
        <IconsRow rowNumber={4} />
      </Grid>
    </Box>
  );
};
//
