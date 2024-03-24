import React from "react";
import { Box, Text, Container } from "@chakra-ui/react";
import LandingHeader from "../../components/LandingComponents/landingHeader";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import ForgetPassword from "../ForgetPassword/ForgetPassword";

const LandingPage = () => {
  return (
    <Container as="section" maxW="8xl" p={5} minH="100vh">
      <LandingHeader />
      {/* <Text>
        {" "}
        This is HomePage container, containing all other components for the
        landing page
      </Text> */}
      {/* <SignupPage/> */}
      {/* <LoginPage/> */}
      <ForgetPassword/>
    </Container>
  );
};

export default LandingPage;
