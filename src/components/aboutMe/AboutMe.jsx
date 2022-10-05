import {
  Image,
  Box,
  Stack,
  Heading,
  Link,
  Button,
  Flex,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { welcomeText } from "../../utils/portfolioTerminalUtils";

export const AboutMe = () => {
  return (
    <Box
      width={{ base: "90%", md: "30%" }}
      height={{ base: "140px", md: "220px" }}
      display="flex"
      alignItems="center"
      justifyContent={{ base: "center", md: "flex-start" }}
      backgroundColor="gray.800"
      borderRadius="15px"
      mt={{ base: "10px", md: "20px" }}
      ml={{ base: "0px", md: "20px" }}
      p={{ base: "0px", md: "20px" }}
    >
      <Image
        rounded={"full"}
        boxSize={{ base: "120px", md: "180px" }}
        objectFit={"cover"}
        src={
          "https://pbs.twimg.com/profile_images/1540755135281762311/hin9KxPj_400x400.jpg"
        }
        alt={"Author"}
      />
      <Stack ml={4} spacing={0}>
        <Heading fontSize={{ base: "xl", md: "2xl" }} fontFamily={"body"}>
          <Text as={"span"} color={"white"}>
            Agustin Franchetti
          </Text>
        </Heading>
        <Text color={"gray.500"}>Full Stack Developer</Text>
        <Text color={"gray.500"}>React, Python, MongoDB</Text>
        <Text color={"gray.500"}>Mendoza, Argentina</Text>
      </Stack>
    </Box>
  );
};

export const MobileAboutMe = () => {
  return (
    <Center>
      <AboutMe />
    </Center>
  );
};
