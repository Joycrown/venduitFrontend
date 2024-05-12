import { Stack, InputGroup, InputLeftElement, Input, InputRightElement, Button } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

function VendorSearch() {
  return (
    <Stack w='100vh' m='40px'  >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
        >
        <CiSearch />
        </InputLeftElement>
        <Input bg="white" placeholder="Vendor name or category, Eg. Gadget vendorin Lagos" />
        <InputRightElement w='100px'>
          <Button colorScheme="blue">Explore</Button>
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
}

export default VendorSearch;
