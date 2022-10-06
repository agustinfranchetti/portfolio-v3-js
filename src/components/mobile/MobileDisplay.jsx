import React from "react";
import { Box, Text, Grid, Button, Flex, Stack, Spacer } from "@chakra-ui/react";
import { MobileAboutMe } from "./MobileAboutMe";
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
        <IconRowButton
          key={`icon ${rowIconsDict[rowNumber]}` + key}
          label={rowIconsDict[rowNumber][key]}
        />
      ))}
    </Flex>
  );
};

export const MobileDisplay = () => {
  return (
    <Box
      width="100vw"
      height="100%"
      backgroundImage={"url(https://wallpaperaccess.com/full/8298140.jpg)"}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <MobileAboutMe />
      <Grid
        templateRows="repeat(4, 1fr)"
        height={"60vh"}
        width={"90%"}
        // backgroundColor="red"
        my={2.5}
        mx={"5%"}
        gap={2}
      >
        <IconsRow rowNumber={1} />
        <IconsRow rowNumber={2} />
        <Spacer />
        <IconsRow rowNumber={3} />
      </Grid>
    </Box>
  );
};
//
