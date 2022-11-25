import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { Form, Field } from "formik";

export const MailForm = ({ buttonSuccess, buttonError, buttonLoading }) => {
  return (
    <Form>
      <Field name="name">
        {({ field, form }) => (
          <FormControl isInvalid={form.errors.name && form.touched.name}>
            <FormLabel>Full name</FormLabel>
            <Input {...field} id="name" />
          </FormControl>
        )}
      </Field>
      <Field name="subject">
        {({ field }) => (
          <FormControl defaultValue="Portfolio Contact">
            <FormLabel>Subject</FormLabel>
            <Input {...field} id="subject" />
          </FormControl>
        )}
      </Field>
      <Field name="email">
        {({ field, form }) => (
          <FormControl isInvalid={form.errors.email && form.touched.email}>
            <FormLabel>Email address</FormLabel>
            <Input {...field} id="email" />
          </FormControl>
        )}
      </Field>
      <Field name="message">
        {({ field, form }) => (
          <FormControl isInvalid={form.errors.message && form.touched.message}>
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
            buttonSuccess ? "green.500" : buttonError ? "red.500" : "#00A3ff"
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
            buttonSuccess ? "green.400" : buttonError ? "red.400" : "blue.400"
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
  );
};
