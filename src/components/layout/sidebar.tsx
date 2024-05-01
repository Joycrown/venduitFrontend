import {
  Box,
  Link,
  HStack,
  Text,
  Stack,
} from "@chakra-ui/react";
import {  FaRegListAlt, FaTelegramPlane } from "react-icons/fa";
import {IoMdPerson } from "react-icons/io";
import { useLocation} from "react-router-dom";
import { IoLogOutSharp} from "react-icons/io5";
import { MdDashboard, MdOutlineInsertChartOutlined } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeUser } from "../../services/currentUserSlice";
import { logoutSuccess } from "../../services/authSlice";
import { RoutePaths } from "../../utils/routes/routePaths";
import LandingHeader from "../LandingComponents/landingHeader";

export default function SideBar() {
  const dispatch = useDispatch();
  const router = useLocation();
  

  const logout = () => {
   dispatch(removeUser())
   dispatch(logoutSuccess())
   window.location.href = RoutePaths.LOGIN
  }

  return (
    <Box bgColor="#fff" h="100vh">
      <Stack>
        <Box>
          <LandingHeader/>
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <Box mt={16}
             p="12px"
             pl="10%"
            pos="relative" >
              <HStack 
              color={router.pathname === RoutePaths.DASHBOARD ? "#5D2FE0": "#A2A1A5"}>
                <MdDashboard size="1.4rem"/>
                <Text fontSize={{base:"",md:"", lg:"16px"}} fontWeight="semibold"> Dashboard</Text>
              </HStack>
            </Box>
          </Link>
          <Link href="/explore" style={{ textDecoration: 'none' }}>
            <Box mt={4} 
             p="12px"
             pl="10%"
            >
              <HStack color={router.pathname === RoutePaths.EXPLORE ? "#5D2FE0": "#A2A1A5"}>
                <FaRegListAlt size="1.4rem"/>
                <Text fontSize={{base:"",md:"", lg:"16px"}} fontWeight="semibold" > Vendor Explore </Text>
              </HStack>
            </Box>
          </Link>
          <Link href="#" style={{ textDecoration: 'none' }}>
            <Box mt={4} 
                p="12px"
                pl="10%">
              <HStack 
              color={router.pathname === RoutePaths.TRANSACTION ? 
                "#5D2FE0": "#A2A1A5"}
              >
                <FaTelegramPlane size="1.5rem"/>
                <Text fontSize={{base:"",md:"", lg:"16px"}} fontWeight="semibold" > Transactions</Text>
              </HStack>
            </Box>
          </Link>
          <Link href="#" style={{ textDecoration: 'none' }}>
            <Box mt={4} 
                p="12px"
                pl="10%">
              <HStack 
              color={router.pathname === RoutePaths.PROMOTION ? 
                "#5D2FE0": "#A2A1A5"}
              >
                <MdOutlineInsertChartOutlined size="1.5rem"/>
                <Text fontSize={{base:"",md:"", lg:"16px"}} fontWeight="semibold" > Promotions</Text>
              </HStack>
            </Box>
          </Link>
          <Link href="#" style={{ textDecoration: 'none' }}>
            <Box mt={4} 
                p="12px"
                pl="10%">
              <HStack 
              color={router.pathname === RoutePaths.ACCOUNT ? 
                "#5D2FE0": "#A2A1A5"}
              >
                <IoMdPerson size="1.5rem"/>
                <Text fontSize={{base:"",md:"", lg:"16px"}} fontWeight="semibold"> My Account</Text>
              </HStack>
            </Box>
          </Link>
          <Box
            position="absolute"
            cursor="pointer"
            bottom={2}
            p="12px"
            pl="3%"
            >
            <HStack color="#0A0A0A" onClick={logout}>
              <IoLogOutSharp size="1.5rem"/>
              <Text fontSize={{base:"",md:"", lg:"16px"}} fontWeight="semibold" > Sign out </Text>
            </HStack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
