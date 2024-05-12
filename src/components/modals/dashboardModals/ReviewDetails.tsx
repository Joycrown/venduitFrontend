/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Box, Divider, HStack, Text } from "@chakra-ui/react"
import ProductCard from "../../utils/ProductCard";
import { useGetVendorQuery } from "../../../services/api";
import { skipToken } from "@reduxjs/toolkit/query";
import { Product } from "./PaymentProcess";



const ReviewDetails = ({values}:any) => {

  const percentageFee = 0.025; // Define percentage fee as a variable accessible anywhere in the file

  const calculateTotalAmount = (products: Product[]) => {
    let totalAmount = 0;
    products?.forEach((product) => {
      totalAmount += Number(product.amount); // Convert to number before addition
    });
  
    const feeAmount = totalAmount * percentageFee; // Calculate the percentage fee
    const totalAmountWithFee = totalAmount + feeAmount; // Calculate the total amount with the fee
  
    return { totalAmount:totalAmount, OverallAmount: totalAmountWithFee,  fee: feeAmount }; // Return total amount and fee
  };
  const { totalAmount, OverallAmount,fee } = calculateTotalAmount(values?.products);

  const { data } = useGetVendorQuery(values.VendorInfo.vendor_id || skipToken) 

  return (
   <Box p={5} border="1px" borderColor="grey" width="350px" borderRadius="10px">
    <Text 
      fontWeight="semibold" 
      opacity="50%" 
      fontSize={{ base: "14px", md:"16px", lg: "15px" }}>
      Products Details
    </Text>
    {values?.products?.map((product:any, index:number)=>(
      <Box pt={8}>
      <ProductCard product= {product} key={index}/>
      
      </Box>
    ))}
    <Divider color="#000" opacity="30%" borderWidth="1px" mt={10} />
    <Text 
      pt={5}
      fontWeight="semibold" 
      opacity="50%" 
      fontSize={{ base: "14px", md:"16px", lg: "15px" }}>
      Vendor Details
    </Text>
    <Box p={4} maxW="250px" mt={4} borderRadius="10px" shadow="0 4px 6px rgba(0, 0, 0, 0.4)">
      <HStack justifyContent="space-between" fontWeight="semibold">
        <HStack>
          <Avatar size="sm" src={data?.full_name || ''} />
          <Text  > {data?.full_name}</Text>
        </HStack>
        <Text color="#5D2FE0"> 4.5</Text>
      </HStack>
    </Box>
    <Divider color="#000" opacity="30%" borderWidth="1px" mt={10} />
    <Text 
      pt={5}
      fontWeight="semibold" 
      opacity="50%" 
      fontSize={{ base: "14px", md:"16px", lg: "15px" }}>
      Transaction Details
    </Text>
    <HStack justifyContent="space-between">
      <Text 
        pt={5}
        fontWeight="semibold" 
        opacity="50%" 
        fontSize={{ base: "14px", md:"16px", lg: "15px" }}>
        Product Amount
      </Text>
      <Text 
        pt={5}
        fontWeight="semibold" 
        opacity="50%" 
        fontSize={{ base: "14px", md:"16px", lg: "15px" }}>
        N {totalAmount}
      </Text>
    </HStack>
    <HStack justifyContent="space-between" pt={1}>
      <Text 
        pt={5}
        fontWeight="semibold" 
        opacity="50%" 
        fontSize={{ base: "14px", md:"16px", lg: "15px" }}>
        Fee
      </Text>
      <Text 
        pt={5}
        fontWeight="semibold" 
        opacity="50%" 
        fontSize={{ base: "14px", md:"16px", lg: "15px" }}>
        N {fee}
      </Text>
    </HStack>
    < Box display="flex" justifyContent="flex-end">
      <Divider borderColor="#000" opacity="10%" borderWidth="1px" width="100px" mt={10} />
    </Box>
    <HStack justifyContent="space-between" pt={0}>
      <Text 
        pt={2}
        fontWeight="semibold" 
        opacity="50%" 
        fontSize={{ base: "14px", md:"16px", lg: "15px" }}>
        Total amount to be paid
      </Text>
      <Text 
        pt={2}
        fontWeight="semibold" 
        opacity="50%" 
        fontSize={{ base: "14px", md:"16px", lg: "15px" }}>
        N {OverallAmount}
      </Text>
    </HStack>
    < Box display="flex" justifyContent="flex-end">
      <Divider borderColor="#000" opacity="10%" borderWidth="1px" width="100px" mt={2} />
    </Box>
   </Box>
  )
}

export default ReviewDetails