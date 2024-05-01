import { Stack, Text, Button } from "@chakra-ui/react";
import { MdError } from "react-icons/md";

function DisputeNotification() {
  return (
    <Stack h="100vh" display="flex" justifyContent="center" alignItems="center">
      <Text>Dispute Submitted</Text>
      <Text fontSize="100px" py="30px" color="red">
        <MdError />
      </Text>
      <Text textAlign="center">
        Your dispute has been submitted,
        <p>we will contact you shortly.</p>
      </Text>

      <Stack alignItems="center" justifyContent="center" my="50px">
        <Button colorScheme="blue" size="sm" w="300px" p="10px">
          back to dashboard
        </Button>
      </Stack>
    </Stack>
  );
}

export default DisputeNotification;
