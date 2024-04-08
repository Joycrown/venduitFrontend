import { Container } from "@chakra-ui/react";
import LandingHeader from "../../components/LandingComponents/landingHeader";
import UnderConstruction from "../extras/UnderConstruction";

const LandingPage = () => {
  return (
    <Container as="section" maxW="8xl" p={5} minH="100vh">
      <LandingHeader />
      <UnderConstruction/>
    </Container>
  );
};

export default LandingPage;
