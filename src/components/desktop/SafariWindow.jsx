import React, { useEffect, useContext } from "react";
import { DesktopContext } from "./DesktopDisplay";
import { FaCircle, FaDotCircle } from "react-icons/fa";
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";

export const SafariWindow = () => {
  const { zIndexes, handleSetAsTopScreen } = useContext(DesktopContext);

  useEffect(() => {
    handleSetAsTopScreen("safari");
  }, []);

  return (
    <Box
      width="600px"
      height="520px"
      backgroundColor="#f4f5f7"
      borderRadius="10px"
      mt={"30px"}
      mr={"200px"}
      boxShadow="dark-lg"
      position={"absolute"}
      zIndex={zIndexes["safari"]}
      onClick={() => handleSetAsTopScreen("safari")}
      resize="both"
      overflow={"auto"}
      px={5}
      pt={5}
    >
      <Flex
        justifyContent="flex-start"
        alignItems="center"
        direction={"row"}
        gap={2}
        mt={-2}
        mb={5}
      >
        <FaCircle color="#d9515d" size={16} />
        <FaCircle color="#f4c025" size={16} />
        <FaCircle color="#3fc930" size={16} />
      </Flex>
      <FormControl id="email">
        <Heading as="h1" size="lg" mb={"10px"}>
          Send me an email
        </Heading>
        <FormLabel>Full name</FormLabel>
        <Input type="text" />
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormErrorMessage>Error message</FormErrorMessage>
        <FormLabel>Subject</FormLabel>
        <Input type="text" />
        <FormLabel>Message</FormLabel>
        <Input type="text" h={"100px"} />
      </FormControl>
      <Button
        mt={4}
        bgColor="#007AFF"
        color="whiteAlpha.900"
        type="submit"
        _hover={{ bgColor: "#00A3ff" }}
      >
        Submit
      </Button>
    </Box>
  );
};
