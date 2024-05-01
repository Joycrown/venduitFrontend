import {Avatar, Box, HStack, Link, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../services/store';
import { useCurrentUserQuery } from '../../services/api';
import { RoutePaths } from '../../utils/routes/routePaths';
import { setUser } from '../../services/currentUserSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect} from 'react';
import Layout from '../../components/layout/layout';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline, IoNotifications } from 'react-icons/io5';
import { RiShieldKeyholeFill } from 'react-icons/ri';
import { FaCircleExclamation } from 'react-icons/fa6';
import { BsDot } from 'react-icons/bs';
import VendorCard from '../../components/utils/VendorCard';
import clothe from "../../assets/images/vendor clothe image.jpg"
import shoe from "../../assets/images/vendor shoe image.jpg"
import MakePayment from '../../components/modals/dashboardModals/PaymentProcess';









const DashboardPage = () => {
const ongoingTransaction =[
  {
    icon: <RiShieldKeyholeFill size="1.5rem" />,
    vendor: "Ramon Footwears", 
    amount: "N72,000.00"
  },
  {
    icon: <FaCircleExclamation size="1.5rem" style={{color:"#FF0000"}}/>,
    vendor: "Ada Clothings", 
    amount: "N172,000.00"
  },
  {
    icon: <RiShieldKeyholeFill size="1.5rem" />,
    vendor: "Mercy Footwears", 
    amount: "N72,000.000"
  },
  {
    icon: <RiShieldKeyholeFill size="1.5rem"/>,
    vendor: "Ramon Footwears", 
    amount: "N72,000.00"
  },
  {
    icon: <FaCircleExclamation size="1.5rem" style={{color:"#FF0000"}}/>,
    vendor: "Lesley  shoes", 
    amount: "N72,000.00"
  }
]
const VendorLists =[
  {
    location: "Lagos,Nigeria",
    img : shoe,
    name: "Ramon Footwears",
    category: "Footwears",  
    rating: "4.5"
  },
  {
    location: "Lagos,Nigeria",
    img : clothe,
    name: "Ada Clothings",
    category: "Clothing", 
    rating: "4.5"
  },
  {
    location: "Lagos,Nigeria",
    img : shoe,
    name: "Ramon Footwears",
    category: "Footwears",  
    rating: "4.5"
  },
  {
    location: "Lagos,Nigeria",
    img : clothe,
    name: "Ada Clothings", 
    category: "Clothing", 
    rating: "4.5"
  },
 
 
]

  const user = useSelector((state: RootState) => state.user.user);
  const {isError, error, isSuccess, data} = useCurrentUserQuery()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()

  
  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data)); // Update user data in the Redux store upon successful query
    } else if (isError && error) {
      navigate(RoutePaths.LOGIN)
      }
      
  },[isSuccess, data, isError, error, dispatch,navigate]);


  return (
    <Layout>
      <MakePayment isOpen={isOpen} onClose={onClose}/>
      <Box bgColor="#F0F0F0" minH="100vh" w="100%">
        <Stack pt={10} direction={{base:"column",md:"column",lg:"row"}} gap={{base:"10",md:"20",lg:"5"}} justifyContent={{base:"",md:"center",lg:"space-evenly"}}>
          <Box display={{base:"flex",md:"flex", lg:"unset"}}  justifyContent={{base:"center",md:"center",lg:"unset"}}>
            <Box  >
              <HStack pos="relative" spacing={14} justifyContent={{base:"space-between",md:"space-between",lg:"space-between"}}>
                <HStack gap={{base:"4",md:"5",lg:"4"}}>
                  <Avatar name={user?.full_name}/>
                  <Text fontSize={{base:"",md:"20px",lg:"18px"}} fontWeight="semibold"> Hi {user?.full_name},</Text>
                </HStack>
                <Box pos="absolute" top="-5px" right={{base:"-3",md:"-3",lg:"-12px"}}> 
                  <BsDot size="2.5rem" style={{color:"#FF0000"}}/>
                </Box>
                <IoNotifications size="1.5rem"/>
              </HStack>
              <Stack direction={{base:"column",md:"row",lg:"row"}} gap={{base:5,md:24,lg:5}} pt={{base:8,md:7,lg:5}} justifyContent={{base:"",md:"unset",lg:"unset"}}>
                <Box p={{base:"3",md:"4",lg:"2"}} cursor="pointer" onClick={onOpen} borderRadius="6px" shadow="0 4px 6px rgba(0, 0, 0, 0.4)" justifyContent="center" display="flex"  minW={{base:"",md:"250px",lg:"100px"}} bgColor="#565559" color="#fff">
                  <Text fontSize={{base:"",md:"18px",lg:"14px"}}> Make a Payment</Text>
                </Box>
                <Link href="/explore" p={{base:"3",md:"4",lg:"2"}} style={{ textDecoration: 'none' }}  borderRadius="6px" shadow="0 4px 6px rgba(0, 0, 0, 0.4)" justifyContent="center" display="flex" minW={{base:"",md:"250px",lg:"100px"}} bgColor="#5D2FE0" color="#fff">
                  <Text fontSize={{base:"",md:"18px",lg:"14px"}}> Explore Vendors</Text>
                </Link>
              </Stack>
              <Stack p={3} mt={6} gap={{base:"70px",md:"150px",lg:"70px"}} bgColor="#182333" borderRadius="10px" width={{base:"",md:"500px",lg:"250px"}}>
                <HStack color="#fff" justifyContent="left">
                  <RiShieldKeyholeFill size="1.2rem" />
                  <Text fontSize={{base:"",md:"20px",lg:"16px"}} fontWeight="semibold" > Escrow Wallet</Text>
                </HStack>
                <Box display="flex" justifyContent="end" alignContent="center">
                  <Text color="#fff" fontSize={{base:"",md:"24px",lg:"24px"}}> N200,000</Text>
                </Box>
              </Stack>
              <Box mt={8} maxH="100vh" overflowY="scroll" className="no-scrollbar" whiteSpace="nowrap">
                <Text fontSize={{base:"",md:"20px",lg:"18px"}} fontWeight="semibold"> Ongoing transactions</Text>
                {ongoingTransaction?.map((items, index:number)=>(
                  <Box bgColor="#FFFFFF" w={{base:"",md:"",lg:""}} key={index} p={3} borderRadius="15px" mt={3}>
                    <HStack justifyContent="space-between">
                      <HStack>
                        <Box borderRadius="50%" p={3} bgColor="#F3F3F3">
                          {items.icon}
                        </Box>
                        <Text fontSize={{base:"",md:"20px",lg:"16px"}} fontWeight="semibold">To: {items.vendor} </Text>
                      </HStack>
                      <Text fontSize={{base:"",md:"20px",lg:"16px"}} fontWeight="semibold"> {items.amount}</Text>
                    </HStack>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Box display={{base:"flex",md:"flex", lg:"unset"}}  justifyContent={{base:"center",md:"center",lg:"unset"}}  >
           <Box bgColor="#fff" p={5} borderRadius="10px" w={{base:"80%",md:"90%",lg:"550px"}}>
              <HStack justifyContent="space-between">
                <Text fontSize={{base:"",md:"22px",lg:"20px"}} fontWeight="semibold">Zero-Dispute vendors</Text>
                <HStack>
                  <IoArrowBackCircleOutline size="1.5rem" style={{color:"#000"}} />
                  <IoArrowForwardCircleOutline size="1.5rem" style={{color:"#000"}}  />
                </HStack>
              </HStack>
              <HStack overflowX="scroll" className="no-scrollbar" whiteSpace="nowrap" pt={5}>
                {VendorLists?.map((item,index:number)=>(
                  <Box key={index}>
                    <VendorCard item={item}/>
                  </Box>
                ))}
              </HStack>
              <Link href='/explore' cursor="pointer" style={{ textDecoration: 'none' }}  pt={10} color="#777373" display="flex" justifyContent="flex-end" fontSize={{base:"",md:"22px",lg:"20px"}}>see more</Link>
              <HStack justifyContent="space-between" pt={8}>
                <Text fontSize={{base:"",md:"",lg:"20px"}} fontWeight="semibold">Favorite vendors</Text>
                <HStack>
                  <IoArrowBackCircleOutline size="1.2rem" style={{color:"#000"}} />
                  <IoArrowForwardCircleOutline size="1.2rem" style={{color:"#000"}}  />
                </HStack>
              </HStack>
              <HStack overflowX="scroll" className="no-scrollbar" whiteSpace="nowrap" pt={5}>
                {VendorLists?.map((item,index:number)=>(
                  <Box key={index}>
                    <VendorCard item={item}/>
                  </Box>
                ))}
              </HStack>
            </Box>
          </Box>
        </Stack>
      </Box>  
    </Layout>
 
   
  )
}

export default DashboardPage