import { Flex, Stack, Text, Button, Spacer } from "@chakra-ui/react";
import {
  MdDashboard,
  MdOutlineStickyNote2,
  MdAccountCircle,
} from "react-icons/md";
import { IoMdPaperPlane } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";

function VendorNav() {
  return (
    <Stack bg="white" p="30px" px="40px" spacing={6} h="100%" w="max-content">
      <Text fontSize="30px" fontWeight="40px" color="blue" py="30px">
        Venduit
      </Text>

      <Flex gap="1rem">
        <MdDashboard />
        <Text fontWeight="bold">Dashboard</Text>
      </Flex>

      <Flex gap="1rem">
        <MdOutlineStickyNote2 />
        <Text fontWeight="bold">Vendor Explore</Text>
      </Flex>

      <Flex gap="1rem">
        <IoMdPaperPlane />
        <Text fontWeight="bold">Transaction</Text>
      </Flex>

      <Flex gap="1rem">
        <IoMdPaperPlane />
        <Text fontWeight="bold">Promotion</Text>
      </Flex>

      <Flex gap="1rem">
        <MdAccountCircle />
        <Text fontWeight="bold">My Account</Text>
      </Flex>

      <Button colorScheme="blue" width="fit-content">
        Cyrpto p2p
      </Button>

      <Spacer />
      
      <Flex gap="1rem">
        <FaSignOutAlt />
        <Text fontWeight="bold">Sign Out</Text>
      </Flex>
    </Stack>
  );
}

export default VendorNav;
