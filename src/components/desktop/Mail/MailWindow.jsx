import React, { useEffect, useContext } from "react";
import { DesktopContext } from "../DesktopDisplay";
import { Box, Flex } from "@chakra-ui/react";
import { Formik } from "formik";
import { MailForm } from "./MailForm";
import { TaskbarButtons } from "../TaskbarButtons";
import emailjs from "emailjs-com";

export const MailWindow = () => {
  const [buttonSuccess, setButtonSuccess] = React.useState(false);
  const [buttonError, setButtonError] = React.useState(false);
  const [buttonLoading, setButtonLoading] = React.useState(false);
  const { zIndexes, handleSetAsTopScreen, setShowMail } =
    useContext(DesktopContext);

  useEffect(() => {
    handleSetAsTopScreen("mail");
  }, []);

  const handleSendEmail = ({ success }) => {
    if (success) {
      setButtonLoading(false);
      setButtonError(false);
      setButtonSuccess(true);
    } else {
      setButtonLoading(false);
      setButtonError(true);
      setButtonSuccess(false);
    }
  };

  const sendEmail = (values) => {
    emailjs
      .send("service_ntakxl8", "template_lne0wod", values, "FKU7zdqCrF6-wm6WA")
      .then(
        (result) => {
          console.log(result.text);
          handleSendEmail({ success: true });
        },
        (error) => {
          console.log(error.text);
          handleSendEmail({ success: false });
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
      zIndex={zIndexes["mail"]}
      onClick={() => handleSetAsTopScreen("mail")}
      pl={2}
      pt={2}
    >
      <TaskbarButtons setWindowOpenFunction={setShowMail} />
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
            <MailForm
              buttonSuccess={buttonSuccess}
              buttonError={buttonError}
              buttonLoading={buttonLoading}
            />
          </Flex>
        )}
      </Formik>
    </Box>
  );
};
