import React from "react";
import {
  Box,
  Center,
  Image,
  Heading,
  Text,
  VStack,
  Link,
  Grid,
  Divider,
} from "@chakra-ui/react";
import {
  welcomeText,
  socialsLinks,
  aboutText,
} from "./utils/portfolioTerminalUtils";

function App() {
  return (
    <Center h="$100vh" w="100vw" bg="gray.900" color={"white"} p={5}>
      <VStack spacing={10}>
        <Image
          // src={profileImage}
          src="https://pbs.twimg.com/profile_images/1646594561991495696/WtagBHrB_400x400.jpg"
          alt="Agustin Franchetti"
          boxSize="200px"
          borderRadius="full"
          objectFit="cover"
        />
        <Heading size="2xl">Agustin Franchetti</Heading>
        <Text fontSize="xl" fontStyle="italic">
          Software Developer
        </Text>
        <Text fontSize="lg" textAlign="center">
          {welcomeText}
        </Text>
        <Text fontSize="md" textAlign="center">
          {aboutText}
        </Text>

        <Divider />
        <Grid
          templateColumns="repeat(auto-fit, minmax(100px, 1fr))"
          gap={4}
          display={"flex"}
          flexDir={"row"}
        >
          {socialsLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              isExternal
              fontWeight="bold"
              color="blue.500"
              _hover={{ textDecoration: "underline" }}
            >
              {link.label}
            </Link>
          ))}
        </Grid>
      </VStack>
    </Center>
  );
}

export default App;
