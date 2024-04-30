import { Stack, Button} from "@chakra-ui/react";

function Buttons() {
    return ( 
        <Stack>
            <Button colorScheme="blue" w='200px'>Make payment</Button>
            <Button colorScheme="gray" w='200px'>Visit Store</Button>
        </Stack>
     );
}

export default Buttons;