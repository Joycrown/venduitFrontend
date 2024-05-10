import { Stack, Flex } from "@chakra-ui/react";
import VendorNav from "./VendorNav";
import VendorSearch from "./VendoreSearch";
import TopCat from "./TopCat";
import Recommed from "./Recommed";

function VendorExplore() {
  return (
    <Stack bg="rgb(245,244,244)">
      <Flex gap={3}>
        <Stack w="400px">
          <VendorNav />
        </Stack>

        <Stack>
          <VendorSearch />
          <TopCat />
          <Recommed />
        </Stack>
      </Flex>
    </Stack>
  );
}

export default VendorExplore;
