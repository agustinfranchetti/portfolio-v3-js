import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const AboutMe = () => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      bg={useColorModeValue("white", "gray.800")}
      rounded={"xl"}
      boxShadow={"lg"}
      pos={"relative"}
      w={"full"}
      overflow={"hidden"}
      mb={10}
    >
      <Stack align={"center"} justify={"center"} p={5}>
        <Image
          rounded={"full"}
          boxSize={"170px"}
          objectFit={"cover"}
          src={
            "https://pbs.twimg.com/profile_images/1540755135281762311/hin9KxPj_400x400.jpg"
          }
          alt={"Author"}
        />
        <Text fontWeight={600} color={"gray.500"} fontSize={"sm"}>
          Agustin Franchetti
        </Text>
        <Text color={"gray.500"} fontSize={"sm"}>
          Fullstack Developer
        </Text>
        <Text color={"gray.500"} fontSize={"sm"}>
          <Link
            href="
            https://www.linkedin.com/in/agustinfranchetti"
            isExternal
          >
            LinkedIn
          </Link>
        </Text>
        <Text color={"gray.500"} fontSize={"sm"}>
          <Link
            href="
            github.com/agustinfranchetti"
            isExternal
          >
            Github
          </Link>
        </Text>
      </Stack>
    </Stack>
  );
};
