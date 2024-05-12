import { Stack, Flex, Text, Button } from "@chakra-ui/react";
import VendorSearch from "../VendoreSearch";
import VendorCard from "../Card";
import Filter1 from "../Filter1";
import Layout from "../../layout/layout"

function VendorResult() {
  return (
    <Layout>
    <Stack bg="rgb(245,244,244)">
      <Flex>
        
        <Stack w="100%" mr={20} ml={10}>
          <VendorSearch />

          <Flex justifyContent="space-between" alignItems="center">
            <Text>Showing 100 results for: “top 100 vendors in Lagos”</Text>
            <Stack>
              <Flex gap={2} alignItems="center">
                <Filter1 />
              </Flex>
            </Stack>
          </Flex>

          <Stack spacing={6}>
            <Flex justifyContent="space-between" flexWrap="wrap" gap={10}>
              {[...Array(8)].map((_, index) => (
                <VendorCard key={index}/>
              ))}
            </Flex>

            <Flex justifyContent="center" mt={4}>
              <Button colorScheme="blue" mr={2}>
                Previous
              </Button>
              {[...Array(5)].map((_, index) => (
                <Button key={index} variant="outline">
                  {index + 1}
                </Button>
              ))}
              <Button colorScheme="blue" ml={2}>
                Next
              </Button>
            </Flex>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
    </Layout>
  );
}

export default VendorResult;
