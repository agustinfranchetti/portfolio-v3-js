import React from "react";
import { Box, Text, Grid, Button, Flex, Stack, Spacer, Link } from "@chakra-ui/react";
import { MobileAboutMe } from "./MobileAboutMe";
import {
  rowIconsDict,
  iconLinksDict,
  iconIconsDict,
} from "../../utils/mobileDisplayUtils";
const IconRowButton = ({ label }) => {
  return (
    <Stack textAlign={"center"}>
      <Link
        href={label ? iconLinksDict[label] : null}
        isExternal
      >
      <Button
        colorScheme="whiteAlpha"
        variant={label ? "solid" : "ghost"}
        h="16"
        w="16"
        bgImage={label ? `url(${iconIconsDict[label]})` : null}
        bgSize="cover"
        bgPosition="center"
        borderRadius={"15px"}
        _hover={{
          bg: label ? `url(${iconIconsDict[label]})` : null,
          bgSize: "cover",
        }}
      />
      </Link>
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
      height="100vh"
      backgroundImage={
        "url(https://res.cloudinary.com/dw4okqkrq/image/upload/v1665277524/portfolio-macos-ios/8298140_jkgb9m.webp)"
      }
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
