import { Stack, Flex } from "@chakra-ui/react";
import VendorSearch from "../VendoreSearch";
import TopCat from "../TopCat";
import Recommed from "../Recommed";
import Layout from "../../layout/layout";

function VendorExplore() {
  return (
    <Stack bg="rgb(245,244,244)">
      <Layout>
        <Stack mx={10}>
          <VendorSearch />
          <TopCat />
          <Recommed />
        </Stack>
      </Layout>
    </Stack>
  );
}

export default VendorExplore;
