import { AboutMe } from "../desktop/AboutMe";
import { Box, Center, Text } from "@chakra-ui/react";

export const MobileAboutMe = () => {
  return (
    <Box>
      <Center>
        <AboutMe />
      </Center>
      <Text textAlign={"center"} color={"white"} my={2}>
        AboutMe Widget
      </Text>
    </Box>
  );
};
