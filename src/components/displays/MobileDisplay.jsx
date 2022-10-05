import React from "react";
import { MobileAboutMe } from "../aboutMe/AboutMe";
import { Box, Text, Grid, Button, Flex, Stack } from "@chakra-ui/react";
import {
  rowIconsDict,
  iconLinksDict,
  iconIconsDict,
} from "../../utils/mobileDisplayUtils";
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
      width="100vw"
      height="100vh"
      backgroundImage={"url(https://wallpaperaccess.com/full/8298140.jpg)"}
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
