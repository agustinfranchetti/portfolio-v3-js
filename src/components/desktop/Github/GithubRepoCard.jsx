import { Box, Flex, Text, Link, Icon } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

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
        <Link fontSize={"lg"} fontWeight={"bold"} href={`https://github.com/agustinfranchetti/${repoSubPath}`} isExternal>
          {repoName} <Icon as={FiExternalLink} />
        </Link>
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
