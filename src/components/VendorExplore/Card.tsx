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
      <Card maxW="200px">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            h="100px"
          />
          <Stack mt="3" spacing="2">
            <Flex justifyContent="space-between" alignItems="center">
              <Heading size="sm">Ramon Shoes</Heading>
              <Text fontSize="sm">Footwears</Text>
            </Flex>

            <Flex alignItems="center" justifyContent="space-between ">
              <Text fontSize="sm">Lagos, Nigeria</Text>

              <Flex alignItems="center" color="blue.600">
                <Text fontSize="sm">4.5</Text>
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
