import { Stack, Input, Text, Flex, Button } from "@chakra-ui/react";
import { GoArrowLeft } from "react-icons/go";
import Buttonn from "./Proceed";

function ProductDetail() {
  return (
    <Stack>
      <Flex p="30px" alignItems="center" gap="200px">
        <GoArrowLeft />
        <Text fontSize="25px" fontWeight="100px">
          Enter product details
        </Text>
      </Flex>

      <Stack mx="35px" my="20px">
        <Stack  my="15px">
          <Text>Product name</Text>
          <Input htmlSize={4} width="auto" borderRadius="20px" h="65px" />
        </Stack>
        <Stack  my="15px">
          <Text>Amount</Text>
          <Input htmlSize={4} width="auto" borderRadius="20px" h="65px" />
        </Stack>
        <Stack  my="15px">
          <Text>Product description (optional)</Text>
          <Input htmlSize={4} width="auto" borderRadius="20px" h="65px" />
        </Stack>
        <Stack  my="15px">
          <Text>add image or video (optional)</Text>
          <Button colorScheme="gray" w="fit-content" p="20px" px="50px" size="xs">upload item</Button>
        </Stack>


        <Text>add another product</Text>


        <Buttonn />
      </Stack>
    </Stack>
  );
}

export default ProductDetail;
