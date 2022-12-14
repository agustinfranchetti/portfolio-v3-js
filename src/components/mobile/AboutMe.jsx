import { Image, Box, Stack, Heading, Text, Center } from "@chakra-ui/react";

export const AboutMe = () => {
  return (
    <Box
      width={{ base: "90%", md: "90%", lg: "35%" }}
      height={{ base: "160px", md: "200px", lg: "220px" }}
      display="flex"
      alignItems="center"
      justifyContent={{ base: "center", md: "center", lg: "flex-start" }}
      backgroundColor="whiteAlpha.900"
      borderRadius="15px"
      mt={{ base: "10px", md: "10px", lg: "20px" }}
      ml={{ base: "0px", md: "0px", lg: "20px" }}
      p={{ base: "0px", md: "0px", lg: "20px" }}
    >
      <Image
        rounded={"full"}
        boxSize={{ base: "120px", md: "160px", lg: "180px" }}
        objectFit={"cover"}
        src={
          "https://res.cloudinary.com/dw4okqkrq/image/upload/v1669238264/portfolio-macos-ios/4CF5F7A5-6041-43BB-A688-07A504EBE7EC-_1__zeu8vr.webp"
        }
        alt={"Author"}
      />
      <Stack ml={4} spacing={0}>
        <Heading
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          fontFamily={"body"}
        >
          <Text as={"span"} color={"gray.800"}>
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
