import { Container, Link, VStack } from "@chakra-ui/react";
import LandingHeader from "../../components/LandingComponents/landingHeader";
import UnderConstruction from "../extras/UnderConstruction";

const LandingPage = () => {
  return (
    <Container as="section" maxW="8xl" p={5} minH="100vh">
      <LandingHeader />
      <UnderConstruction/>
      <VStack>
        <Link
          href="/login"
          variant="outline"
          color="white"
          display="flex"
          justifyContent="center"
          bgColor="blue"
          p={3}
          mt={5}
          width={{base:"100%",md:"95%",lg:"50%"}}
          size="sm"
          border="1px"
          borderRadius={50}
        >
          Log in
        </Link>
        <Link
          href="/signup"
          variant="outline"
          color="white"
          display="flex"
          justifyContent="center"
          bgColor="blue"
          p={3}
          mt={5}
          width={{base:"100%",md:"95%",lg:"50%"}}
          size="sm"
          border="1px"
          borderRadius={50}
        >
          Sign Up
        </Link>

      </VStack>
    </Container>
  );
};

export default LandingPage;
