import React, { useEffect, useContext } from "react";
import { DesktopContext } from "./DesktopDisplay";
import { FaCircle } from "react-icons/fa";
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
import emailjs from "emailjs-com";
import { Formik, Form, Field } from "formik";

export const SafariWindow = () => {
  const { zIndexes, handleSetAsTopScreen } = useContext(DesktopContext);

  useEffect(() => {
    handleSetAsTopScreen("safari");
  }, []);

  //acces .env variables

  const sendEmail = (values) => {
    emailjs
      .send("service_ntakxl8", "template_lne0wod", values, "FKU7zdqCrF6-wm6WA")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box
      width="600px"
      height="420px"
      backgroundColor="#f4f5f7"
      borderRadius="10px"
      mt={"100px"}
      mr={"200px"}
      boxShadow="dark-lg"
      position={"absolute"}
      zIndex={zIndexes["safari"]}
      onClick={() => handleSetAsTopScreen("safari")}
      // resize="horizontal"
      // overflow={"auto"}
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
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          }
          if (!values.message) {
            errors.message = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            sendEmail(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {(props) => (
          <Form>
            <Field name="name">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Full name</FormLabel>
                  <Input {...field} id="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="subject">
              {({ field, form }) => (
                <FormControl defaultValue="Portfolio Contact">
                  <FormLabel>Subject</FormLabel>
                  <Input {...field} id="subject" />
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel>Email address</FormLabel>
                  <Input {...field} id="email" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="message">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.message && form.touched.message}
                >
                  <FormLabel>Message</FormLabel>
                  <Input {...field} id="message" />
                  <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              bgColor="#007AFF"
              color="whiteAlpha.900"
              type="submit"
              _hover={{ bgColor: "#00A3ff" }}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
