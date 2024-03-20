import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const LandingHeader = () => {
  return (
   <Box>
    <Box bgColor="blue" color="#fff"  p={5} borderRadius=".7rem">
      <Heading fontSize={{base:"12px", md:"14px", lg:"18px"}} fontWeight="bold"> This is the header component</Heading>
    </Box>
   </Box>
  )
}

export default LandingHeader