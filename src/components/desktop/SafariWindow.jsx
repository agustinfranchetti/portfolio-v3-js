import React, { useEffect, useContext } from "react";
import { DesktopContext } from "./DesktopDisplay";
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
  Button,
} from '@chakra-ui/react'

export const SafariWindow = () => {
  const { zIndexes, handleSetAsTopScreen } = useContext(DesktopContext);

  useEffect(() => {
    handleSetAsTopScreen("safari");
  }, []);

  return (
    <Box
      width="600px"
      height="500px"
      backgroundColor="white"
      borderRadius="10px"
      padding="10px"
      mt={"30px"}
      mr={"200px"}
      boxShadow="dark-lg"
      position={"absolute"}
      zIndex={zIndexes["safari"]}
      onClick={() => handleSetAsTopScreen("safari")}
      resize="both"
      overflow={"auto"}
    >
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
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </Box>
  );
};
