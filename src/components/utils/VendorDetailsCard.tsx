/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Box, HStack, Text, useToast } from '@chakra-ui/react'
import { useGetVendorQuery } from '../../services/api'
import { skipToken } from '@reduxjs/toolkit/query';
import { useEffect } from 'react';


const VendorDetailsCard = (getVendorID:any) => {
  const { data, error, isError } = useGetVendorQuery(getVendorID || skipToken)
  const toast = useToast()
  useEffect(() => {
    try {
      if (isError) {
        toast({
          title:  (error as any)?.data.detail,
          position: "top-right",
          status: "error",
          isClosable: true,
        });
        window.location.reload()
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
  return (
    <Box p={4} maxW="250px" mt={4} borderRadius="10px" shadow="0 4px 6px rgba(0, 0, 0, 0.4)">
      <HStack justifyContent="space-between" fontWeight="semibold">
        <HStack>
          <Avatar size="sm" src={data?.full_name || ''} />
          <Text> {data?.full_name}</Text>
        </HStack>
        <Text color="#5D2FE0"> 4.5</Text>
      </HStack>
    </Box>
  )
}

export default VendorDetailsCard