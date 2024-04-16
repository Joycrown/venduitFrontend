import { Stack, Container, Text, Box } from "@chakra-ui/react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import BackDashboard from "./BackDashboard";

function PaymentSuccessful() {
  return (
    <Stack>
      <Text textAlign="center" py="60px" fontSize="30px" fontWeight="200px">
        Congratulation
      </Text>

      <Box>
        <Container
          border="1px solid black"
          alignItems="center"
          justifyContent="center"
          display="flex"
          flexDirection="column"
          h="400px"
        >
          <Text fontSize="150px" py="30px" color="#5D2FE0">
            <IoMdCheckmarkCircle />
          </Text>
          <Text py="30px">Your payment has been successful.</Text>

          <BackDashboard />
        </Container>
      </Box>
    </Stack>
  );
}

export default PaymentSuccessful;
