import { Stack, Flex, Text} from "@chakra-ui/react";
import {
  Card,
  CardBody,
  Image,
  Heading,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";


function VendorCard() {
  return (
    <Stack>
      <Card maxW="sm" w="fit-content">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            h="150px"
          />
          <Stack mt="6" spacing="3">
            <Flex justifyContent="space-between" alignItems="center">
              <Heading size="md">Ramon Shoes</Heading>
              <Text>Footwears</Text>
            </Flex>

            <Flex alignItems="center" justifyContent="space-between ">
                <Text>Lagos, Nigeria</Text>

              <Flex alignItems="center"  color="blue.600">
              <Text fontSize="2xl">
                4.5
              </Text>
              <FaStar />
              </Flex> 
            </Flex>
          </Stack>
        </CardBody> 
      </Card>
    </Stack>
  );
}

export default VendorCard;
