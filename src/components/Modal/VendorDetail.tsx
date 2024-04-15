import { Stack, Input, Text, Flex } from "@chakra-ui/react";
import { GoArrowLeft } from "react-icons/go";
import Buttonn from './Proceed'

function VendorDetail() {
  return (
    <Stack>
      <Flex p="30px" alignItems="center" gap="200px">
        <GoArrowLeft />
        <Text fontSize="25px" fontWeight="100px">
          Enter Vendor details
        </Text>
      </Flex>

      <Stack px="50px">
        <Text>Vendor name</Text>
        <Input htmlSize={4} width="auto" borderRadius="20px" h="65px" />

        <Stack my="30px">
          <Text>Vendor email or phone number</Text>
          <Input htmlSize={4} width="auto" borderRadius="20px" h="65px" />
        </Stack>
      </Stack>

      <Buttonn />
    </Stack>
  );
}

export default VendorDetail;
