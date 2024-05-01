/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Box, Center, FormControl, FormLabel, HStack, Input, Radio, RadioGroup, Stack, Text, useToast } from '@chakra-ui/react'
import { useGetVendorQuery } from '../../../services/api'
import { useEffect,useState } from 'react';
import { debounce } from "lodash";
import { skipToken } from '@reduxjs/toolkit/query';
import { useSelector } from 'react-redux';
import { RootState } from '../../../services/store';






const EnterVendorForm = ({setFieldValue, values,nextStep}:any) => {
  const [getVendorID, setGetVendorID] = useState('')
  const { data, error, isError, isSuccess } = useGetVendorQuery(getVendorID || skipToken) 
  const toast = useToast()
  const id = useSelector((state: RootState) => state.product.vendor_id);
 

  


 
  const debouncedSearch = debounce((searchValue) => {
    // Call your RTK query endpoint here with the vendorId
    
    setGetVendorID(searchValue);
    // setGetVendorID(vendorId)

  }, 1100); // Adjust debounce delay as needed
  
  useEffect(() => {
    try {
      if (isError) {
        toast({
          title:  (error as any)?.data.detail,
          position: "top-right",
          status: "error",
          isClosable: true,
        });
        // window.location.reload()
      }
    } catch (e) {
      toast({
        title: "Connection Error",
        position: "top-right",
        status: "error",
        isClosable: true,
      });
    }
  }, [isError, error, toast]);

  useEffect(() => {
    if (values.VendorInfo.vendor_id) {
      debouncedSearch(values.VendorInfo.vendor_id);
    }
    // Clean up debounce function
    return () => {
      debouncedSearch.cancel();
    };
  }, [values.VendorInfo.vendor_id, debouncedSearch])

  useEffect(() => {
    if (id) {
      // Call your API query endpoint here with the vendorId
      debouncedSearch(id);
    }
  }, [id, debouncedSearch]);
  
  return (
    <>
      <Stack spacing={2}>
        <FormControl id="vendor_id" isRequired>
          <FormLabel 
          fontWeight="semibold" 
          opacity="50%" 
          fontSize={{ base: "14px", md:"16px", lg: "15px" }}>Enter Vendor ID</FormLabel>
          <Input
            name="VendorInfo.vendor_id"
            type="text"
            value={values.VendorInfo.vendor_id}
            onChange={(e) =>
              setFieldValue(
                'VendorInfo.vendor_id',
                e.target.value
              )
            }
          />
        </FormControl>
      </Stack>
      <Text pt={3} cursor="pointer" fontWeight="semibold" opacity="50%" fontSize={{ base: "14px", md:"16px", lg: "15px" }}>Vendor not on venduit?</Text>
      <Box>

        { data  && isSuccess ? 
        <Box p={4} maxW="250px" mt={4} borderRadius="10px" shadow="0 4px 6px rgba(0, 0, 0, 0.4)">
          <HStack justifyContent="space-between" fontWeight="semibold">
            <HStack>
              <Avatar size="sm" src={data?.full_name || ''} />
              <Text  > {data?.full_name}</Text>
            </HStack>
            <Text color="#5D2FE0"> 4.5</Text>
          </HStack>
        </Box>:
        " "}
      </Box>
      <RadioGroup  mt={7}>
        <HStack mb={{base:3,md:""}}>
          <Radio value="escrow">
            <Text fontSize="16px" fontWeight="Bold">
              Escrow Payment 
            </Text>
            <Text fontSize="13px" pt={1}>Refunds available for this payment type, if your dispute is verified.</Text>
          </Radio>
          <Radio value="direct">
            <Text fontSize="16px" fontWeight="Bold">
                Direct Payment 
            </Text>
            <Text fontSize="13px" pt={1}>There are no refunds available for this payment type in the event of a dispute. </Text>
          </Radio>
        </HStack>
      </RadioGroup>
      
      <Center pb={2} pt={24} color="#fff">
        <Box
          mt={3}
          as="button"
          onClick={nextStep}
          bg={isSuccess && data ? "#5D2FE0" : "gray.300"}
          width={{base:"70%",md:"50%",lg:"75%"}}
          borderRadius="4px"
          disabled={!isSuccess && !data}
          p={2}
          fontSize={{ base: "14px", md:"16px", lg: "14px" }}
        >
          Proceed
        </Box>
      </Center>
    </>
  )
}

export default EnterVendorForm