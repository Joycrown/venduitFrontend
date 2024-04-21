import { Stack, Button, } from "@chakra-ui/react";


function BackDashboard() {
    return ( 
        <Stack>
            <Button
            colorScheme="blue"
            size="sm"
            p="10px"
            px="20px"
            alignItems="center"
          >
            Back to dashboard
          </Button>
        </Stack>
     );
}

export default BackDashboard;