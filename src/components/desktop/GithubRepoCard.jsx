import { Box, Flex, Text } from "@chakra-ui/react";

export const GithubRepoCard = ({
  repoSubPath,
  repoName,
  repoDescription,
  children,
}) => {
  return (
    <Box
      width="100%"
      height="100px"
      backgroundColor="white"
      borderRadius="10px"
      alignContent={"center"}
      justifyContent={"space-between"}
      p={5}
      flexDir={"row"}
      display={"flex"}
    >
      <Flex direction={"column"}>
        <Text
          typeof="link"
          href={`github.com/agustinfranchetti/${repoSubPath}`}
          fontSize={"lg"}
          fontWeight="bold"
        >
          {repoName}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {repoDescription}
        </Text>
      </Flex>
      <Flex direction={"row"} alignContent={"center"} gap={5}>
        {children}
      </Flex>
    </Box>
  );
};
