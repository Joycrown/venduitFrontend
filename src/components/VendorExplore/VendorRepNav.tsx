import { Flex, Stack, Text, Button, Spacer } from "@chakra-ui/react";
import {
  MdDashboard,
  MdOutlineStickyNote2,
  MdAccountCircle,
} from "react-icons/md";
import { IoMdPaperPlane, IoMdHeart } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import {
  MdOutlineShoppingBag,
  MdOutlineNotificationsActive,
} from "react-icons/md";
import { Link } from "react-router-dom";

function VendorRepNav() {
  return (
    <Stack bg="white" p="30px" px="40px" spacing={6} h="100%" w="max-content">
      <Text
        fontSize="30px"
        fontWeight="40px"
        color="rgb(93,47,224)"
        paddingTop="30px"
        textAlign="center"
      >
        Venduit
      </Text>

      <Flex
        gap={6}
        marginBottom="30px"
        p={3}
        borderRadius={10}
        bg="rgb(239,235,252)"
        color="rgb(93,47,224)"
        alignItems="center"
        justifyContent="center"
      >
        <Link to="/cart">
          <MdOutlineShoppingBag />
        </Link>
        <Link to="/save">
          <IoMdHeart />
        </Link>
        <Link to="/notification">
          <MdOutlineNotificationsActive />
        </Link>
      </Flex>

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

      <Spacer />

      <Flex gap="1rem">
        <FaSignOutAlt />
        <Text fontWeight="bold">Sign Out</Text>
      </Flex>
    </Stack>
  );
}

export default VendorRepNav;
