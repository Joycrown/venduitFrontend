import { Stack, Flex } from "@chakra-ui/react";
import VendorNav from "./VendorNav";
import VendorSearch from "./VendoreSearch";
import TopCat from "./TopCat";
import Recommed from "./Recommed";

function VendorExplore() {
    return ( 
        <Stack>
            <Flex>
            <VendorNav />

            <Stack>
            <VendorSearch/>
            <TopCat/>
            <Recommed/>
            </Stack>
            
            </Flex>
           
        </Stack>
     );
}

export default VendorExplore;