import { Stack, Flex, Text} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa6";

function Cart() {
    return ( 
        <Stack>
        <Flex justifyContent="space-between">
        <FaArrowLeft />
        <Text>Notification</Text>
        </Flex>

    </Stack>
     );
}

export default Cart;