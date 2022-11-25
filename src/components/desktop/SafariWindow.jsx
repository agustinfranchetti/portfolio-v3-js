import React, { useEffect, useContext } from "react";
import { DesktopContext } from "./DesktopDisplay";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Text,
  Spinner,
} from "@chakra-ui/react";
import emailjs from "emailjs-com";
import { Formik, Form, Field } from "formik";
import { TaskbarButtons } from "./TaskbarButtons";

export const SafariWindow = () => {
  const [buttonSuccess, setButtonSuccess] = React.useState(false);
  const [buttonError, setButtonError] = React.useState(false);
  const [buttonLoading, setButtonLoading] = React.useState(false);
  const { zIndexes, handleSetAsTopScreen, setShowSocialMedia } =
    useContext(DesktopContext);

  useEffect(() => {
    handleSetAsTopScreen("safari");
  }, []);

  const sendEmail = (values) => {
    emailjs
      .send("service_ntakxl8", "template_lne0wod", values, "FKU7zdqCrF6-wm6WA")
      .then(
        (result) => {
          console.log(result.text);
          setButtonLoading(false);
          setButtonError(false);
          setButtonSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setButtonLoading(false);
          setButtonSuccess(false);
          setButtonError(true);
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
      pl={2}
      pt={2}
    >
      <TaskbarButtons setWindowOpenFunction={setShowSocialMedia} />
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
          setButtonLoading(true);
          setTimeout(() => {
            sendEmail(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {() => (
          <Flex px={5} pt={5} width="100%" height="100%" flexDir="column">
            <Form>
              <Field name="name">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel>Full name</FormLabel>
                    <Input {...field} id="name" />
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
                  </FormControl>
                )}
              </Field>
              <Flex justifyContent="space-between" textAlign={"left"}>
                <Text
                  ml={2}
                  mt={4}
                  textColor={
                    buttonSuccess
                      ? "green.500"
                      : buttonError
                      ? "red.500"
                      : "#00A3ff"
                  }
                >
                  {buttonSuccess
                    ? "Your message has been sent!"
                    : buttonError
                    ? "There was an error sending your message."
                    : ""}
                </Text>
                <Button
                  w={100}
                  mt={4}
                  bgColor={
                    buttonSuccess
                      ? "green.400"
                      : buttonError
                      ? "red.400"
                      : "blue.400"
                  }
                  color="whiteAlpha.900"
                  type="submit"
                  _hover={{
                    bgColor: buttonSuccess
                      ? "green.500"
                      : buttonError
                      ? "red.500"
                      : "#00A3ff",
                  }}
                >
                  {buttonLoading ? (
                    <Spinner />
                  ) : buttonSuccess ? (
                    "Sent!"
                  ) : buttonError ? (
                    "Error"
                  ) : (
                    "Send"
                  )}
                </Button>
              </Flex>
            </Form>
          </Flex>
        )}
      </Formik>
    </Box>
  );
};
