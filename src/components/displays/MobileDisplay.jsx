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
    1: "location",
    2: "discord",
    3: null,
    4: null,
  },
  3: {
    1: "phone",
    2: "telegram",
    3: "email",
    4: "resume",
  },
};

const iconIconsDict = {
  linkedin:
    "https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_14-linkedin-1024.png",
  github:
    "https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/GitHub-1024.png",
  twitter:
    "https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_6-twitter-1024.png",
  instagram:
    "https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_3-instagram-1024.png",
  location: "https://img.icons8.com/color/344/apple-map.png",
  discord:
    "https://cdn2.iconfinder.com/data/icons/gaming-platforms-squircle/250/discord_squircle-1024.png",
  phone:
    "https://cdn2.iconfinder.com/data/icons/apple-ios7-icons/118/phone_ios7_ios_7.png",
  email:
    "https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-1024.png",
  telegram:
    "https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_19-telegram-1024.png",
  resume:
    "https://cdn2.iconfinder.com/data/icons/apple-ios7-icons/118/notes_ios7_ios_7.png",
};

const iconLinksDict = {
  linkedin: "https://www.linkedin.com/in/agustinfranchetti/",
  github: "https://github.com/agustinfranchetti",
  twitter: "https://twitter.com/franchoDev",
  instagram: "https://www.instagram.com/agustinfranchetti/",
  location: "https://goo.gl/maps/6Z5Z9Z9Z9Z9Z9Z9Z9",
  discord: "https://discord.gg/franchomister#1996",
  phone: "tel:+5492611234567",
  email: "mailto: agustinfranchetti@gmail.com",
  telegram: "https://t.me/agusfranchetti",
  resume:
    "https://drive.google.com/file/d/1Zv1sZdU6ZQ2QG8W8OwJz2fK6z1OzJ1eZ/view?usp=sharing",
};

const IconRowButton = ({ label }) => {
  return (
    <Stack textAlign={"center"}>
      <Button
        colorScheme="whiteAlpha"
        variant="ghost"
        onClick={() => window.open(iconLinksDict[label], "_blank")}
        h="16"
        w="16"
        bgImage={`url(${iconIconsDict[label]})`}
        bgSize="cover"
        bgPosition="center"
        borderRadius={"15px"}
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
        my={2.5}
        height="fit-content"
        gap={2}
      >
        <IconsRow rowNumber={1} />
        <IconsRow rowNumber={2} />
        <Grid />
        <Grid />
        <IconsRow rowNumber={3} />
      </Grid>
    </Box>
  );
};
//
