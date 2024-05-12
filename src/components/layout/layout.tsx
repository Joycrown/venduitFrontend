/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect } from "react";
import { Box, Center,Link, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, HStack, Spinner, Text, useDisclosure, Stack, useToast } from "@chakra-ui/react";
import SideBar from "./sidebar";
import DashboardHeaderMobile from "./dashboardHeaderMobile";
import { useLocation} from "react-router-dom";
import { IoMdPerson} from "react-icons/io";
import { FaRegListAlt, FaTelegramPlane } from "react-icons/fa";
import { MdDashboard, MdOutlineInsertChartOutlined} from "react-icons/md";
import { useDispatch } from "react-redux";
import { useCurrentUserQuery, useRefreshTokenMutation } from "../../services/api";
import { loginSuccess, logoutSuccess } from "../../services/authSlice";
import { removeUser, setUser } from "../../services/currentUserSlice";
import { IoLogOutSharp } from "react-icons/io5";
import { RoutePaths } from "../../utils/routes/routePaths";


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch()
  const toast = useToast()
  const {isError, error, isSuccess, data} = useCurrentUserQuery()
  const [refreshToken,{isError:isErrorRefresh, error:errorRefresh}] = useRefreshTokenMutation()
  const router = useLocation();
  const token = localStorage.getItem('refresh_token');
 

  const tokenRefresh = async (token:any) => {
    try {
      const response = await refreshToken({ token });
      if ('data' in response) {
        const refreshedTokenData = response.data;
        if (refreshedTokenData && refreshedTokenData.refresh_token) {
          // Update the access token in the Redux store
          dispatch(loginSuccess(refreshedTokenData));
          window.location.href = router.pathname
        }
      } else {
        // Handle error response
       
        // Handle error if token refresh fails
      }
    } catch (error) {
      
      // Handle error if token refresh fails
    }
  };
  

  const logout = () => {
    dispatch(removeUser())
    dispatch(logoutSuccess())
    window.location.href = RoutePaths.LOGIN
   }
 


  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data)); // Update user data in the Redux store upon successful query
    } else if (isError && error) {
      const refreshTokenIfNeeded = async () => {
        if (isError && token) {
          await tokenRefresh(token);
        }
      };
    
      refreshTokenIfNeeded();
      }
      
  },[isSuccess, data, isError, error, dispatch, token]);
  


   useEffect(() => {
    try {
      if (isErrorRefresh && errorRefresh) {
      
        logoutSuccess()
        window.location.href = RoutePaths.LOGIN
      }
    } catch (e) {
      toast({
        title: "Connection Error",
        position: "top-right",
        status: "error",
        isClosable: true,
      });
      window.location.href = RoutePaths.LOGIN
    }
  }, [isErrorRefresh,toast]);

  
 
  return (
    <Box
      display={{ lg: "grid" }}
      gridTemplateColumns={{ lg: "0.8fr 4fr" }}
      minH="100vh"
      maxW={"max(100%,1920px)"}
      mx="auto"
    >
      <Box
        as="aside"
        display={{ base: "none", lg: "block" }}
        borderRight={{ base: "none", lg: "1px solid #d4d3d2" }}
        maxH="100vh"
        className="no-scrollbar"
        pb="70px"
      >
        <SideBar/>
      </Box>
      <Box
        as="section"
        bgColor="#ffffff"
        maxH="100vh"
        overflowY="scroll"
        className="no-scrollbar"
      >
        <DashboardHeaderMobile openSideNav={onOpen} />

        {children}
        {!children && (
          <Center w="100%" h="100%">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="brand.400"
              size="xl"
            />
          </Center>
        )}
      </Box>

      <Drawer
        size="xs"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="#fff" size="lg" />
          <Stack bgColor="#fff" h="100vh">
            <Box pl="5%">
              <Link href="/dashboard" style={{ textDecoration: 'none' }}>
                <Box mt={16}
                p="12px"
                pl="10%"
                pos="relative" >
                  <HStack 
                  color={router.pathname === RoutePaths.DASHBOARD ? "#5D2FE0": "#A2A1A5"}>
                    <MdDashboard size="1.5rem"/>
                    <Text fontSize={{base:"",md:"", lg:"18px"}} fontWeight="semibold"> Dashboard</Text>
                  </HStack>
                </Box>
              </Link>
              <Link href="/vendor_explore" style={{ textDecoration: 'none' }}>
                <Box mt={4} 
                p="12px"
                pl="10%"
                >
                  <HStack color={router.pathname === RoutePaths.VENDOR_EXPLORE ? "#5D2FE0": "#A2A1A5"}>
                    <FaRegListAlt size="1.3rem"/>
                    <Text fontSize={{base:"",md:"", lg:"18px"}} fontWeight="semibold" > Vendor Explore </Text>
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
                    <Text fontSize={{base:"",md:"", lg:"18px"}} fontWeight="semibold" > Transactions</Text>
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
                    <Text fontSize={{base:"",md:"", lg:"18px"}} fontWeight="semibold" > Promotions</Text>
                  </HStack>
                </Box>
              </Link>
              <Link href="#" style={{ textDecoration: 'none' }}>
                <Box mt={4} 
                    p="12px"
                    pl="10%">
                  <HStack 
                  color={router.pathname === RoutePaths.ACCOUNT? 
                    "#5D2FE0": "#A2A1A5"}
                  >
                    <IoMdPerson size="1.5rem"/>
                    <Text fontSize={{base:"",md:"", lg:"18px"}} fontWeight="semibold"> My Account</Text>
                  </HStack>
                </Box>
              </Link>
              <Box
                position="absolute"
                cursor="pointer"
                bottom={2}
                p="12px"
                pl="15%"
                >
                <HStack color="#0A0A0A" onClick={logout}>
                  <IoLogOutSharp size="1.5rem"/>
                  <Text fontSize={{base:"",md:"", lg:"16px"}} fontWeight="semibold" > Sign out </Text>
                </HStack>
              </Box>
            </Box>
          </Stack>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Layout;
