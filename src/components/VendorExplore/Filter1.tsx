import React, { useState } from "react";
import { Stack, Text, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import Dropdown from "./Dropdown";
import { BsFilterLeft } from "react-icons/bs";

function Filter1() {
  const options = ["Option 1", "Option 2", "Option 3"];

  const [isOpen, setIsOpen] = useState(false);

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Stack spacing={5}>
      <Button onClick={toggleFilters}>
        <Text>Filter</Text>
        <BsFilterLeft />
      </Button>
      <Drawer placement="right" onClose={toggleFilters} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="white">
          <DrawerCloseButton />
          <DrawerHeader>Filter</DrawerHeader>
          <DrawerBody>
            <Dropdown options={options} />
            <Button colorScheme="blue" my={3}>
              Filter my results
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
}

export default Filter1;
