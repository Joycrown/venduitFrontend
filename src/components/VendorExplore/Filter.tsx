import { useState } from "react";
import { Button, Text, Box, Checkbox, Stack, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { BsFilterLeft } from "react-icons/bs";

function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <Button onClick={toggleFilters}>
        <Text>Filter</Text>
        <BsFilterLeft />
      </Button>
      <Drawer placement="right" onClose={toggleFilters} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="white">
          <DrawerCloseButton />
          <DrawerHeader>Filters</DrawerHeader>
          <DrawerBody>
            <Stack mt={2} spacing={2} fontSize="xl">
              <Checkbox>Most relevant</Checkbox>
              <Checkbox>Most recent</Checkbox>
              <Checkbox>Positive reviews</Checkbox>
              <Checkbox>Negative reviews</Checkbox>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Filter;
