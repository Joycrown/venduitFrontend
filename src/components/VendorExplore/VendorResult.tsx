import { Stack, Flex, Text, Button } from "@chakra-ui/react";
import VendorNav from "./VendorNav";
import VendorSearch from "./VendoreSearch";
import VendorCard from "./Card";
import Filter1 from "./Filter1";


function VendorResult() {
  return (
    <Stack bg="lightgray">
      <Flex>
        <Stack w="fit-content">
          <VendorNav />
        </Stack>
        <Stack w="100%" mr={20} marginLeft={10}>
          <VendorSearch />

          <Flex justifyContent="space-between" alignItems="center">
            <Text>Showing 100 results for: “ top 100 vendors in Lagos”</Text>
            <Stack>
              <Flex gap={2} alignItems="center">
                <Filter1/>
              </Flex>
            </Stack>
          </Flex>

          <VendorCard/>
        </Stack>
      </Flex>
    </Stack>
  );
}

export default VendorResult;
