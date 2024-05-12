import { Stack, Flex, Text} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa6";

function SaveItem() {
    return ( 
        <Stack>
            <Flex justifyContent="space-between">
            <FaArrowLeft />
            <Text>Saved Item</Text>
            </Flex>

        </Stack>
     );
}

export default SaveItem;