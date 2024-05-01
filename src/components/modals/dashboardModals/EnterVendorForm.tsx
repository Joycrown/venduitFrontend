/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Box, Center, FormLabel, HStack, Input, Radio, RadioGroup, Text, useToast } from '@chakra-ui/react'
import { useGetVendorQuery } from '../../../services/api'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Controller, useForm } from "react-hook-form";
import { useEffect,useState } from 'react';
import { debounce } from "lodash";
import { skipToken } from '@reduxjs/toolkit/query';
import { useSelector } from 'react-redux';
import { RootState } from '../../../services/store';





const EnterVendorForm = ({onSubmit}:any) => {
  const [getVendorID, setGetVendorID] = useState('')
  const { data, error, isError, isSuccess } = useGetVendorQuery(getVendorID || skipToken) 
  const toast = useToast()
  const id = useSelector((state: RootState) => state.product.vendor_id);
  const Step1Schema = yup.object().shape({
    vendor_id: yup.string().required('Vendor ID is required')
  });
  const { control, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(Step1Schema),
  });

  

  const vendorId = watch("vendor_id");
 
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
    if (vendorId) {
      debouncedSearch(vendorId);
    }
    // Clean up debounce function
    return () => {
      debouncedSearch.cancel();
    };
  }, [vendorId, debouncedSearch])

  useEffect(() => {
    if (id) {
      // Call your API query endpoint here with the vendorId
      debouncedSearch(id);
    }
  }, [id, debouncedSearch]);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="vendor_id"
        control={control}
        defaultValue={id  ? id : ""}
        render={({ field }) => (
          <>
          <Box>
            <FormLabel fontWeight="semibold" opacity="50%" fontSize={{ base: "14px", md:"16px", lg: "15px" }} pt="14px">
              Enter Vendor ID
            </FormLabel>
            <Input
              type="text"
              width={{base:"90%",md:"",lg:"90%"}}
              placeholder='VN47485858'
              id="vendor_id"
              {...field}
              fontSize={{ base: "16px", md:"16px", lg: "14px" }}
            />
            {errors.vendor_id && <p style={{fontSize:"10px", color:"red"}}>{errors.vendor_id.message}</p>}
        </Box>
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
        </>
        )}
      />
      
      <Center pb={2} pt={24} color="#fff">
        <Box
          mt={3}
          as="button"
          type="submit"
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
    </form>
  )
}

export default EnterVendorForm