import React from "react";
import {
  Center,
  Image,
  Heading,
  Text,
  VStack,
  Link,
  Grid,
  Divider,
  Box,
  Stack,
} from "@chakra-ui/react";
import {
  welcomeText,
  socialsLinks,
  aboutText,
} from "./utils/portfolioTerminalUtils";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function App() {
  const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    instagram: FaInstagram,
    gmail: SiGmail,
  };

  return (
    <Center height={"$100vh"} w="100vw" bg="gray.900" color={"white"} p={5}>
      <Stack
        w="100%"
        h="100%"
        justifyContent="center"
        alignItems="center"
        gap={5}
      >
        <Image
          // src={profileImage}
          src="https://pbs.twimg.com/profile_images/1646594561991495696/WtagBHrB_400x400.jpg"
          alt="Agustin Franchetti"
          boxSize={["150px", "200px", "250px", "300px"]}
          borderRadius="full"
          objectFit="cover"
        />
        <Heading size="2xl" textAlign="center">
          Agustin Franchetti
        </Heading>
        <Text fontSize="xl" fontStyle="italic">
          Software Developer
        </Text>
        <Text fontSize="lg" textAlign="center">
          {welcomeText}
        </Text>
        <Text fontSize="md" textAlign="center">
          {aboutText}
        </Text>
        <Grid
          templateColumns="repeat(auto-fit, minmax(100px, 1fr))"
          gap={4}
          display={"flex"}
          flexDir={"row"}
          justifyContent="center"
        >
          {socialsLinks.map((link, index) => {
            const IconComponent = socialIcons[link.icon];
            return (
              <Link
                key={index}
                href={link.url}
                isExternal
                fontWeight="bold"
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
              >
                <IconComponent size="1.5em" />
              </Link>
            );
          })}
        </Grid>
      </Stack>
    </Center>
  );
}

export default App;
