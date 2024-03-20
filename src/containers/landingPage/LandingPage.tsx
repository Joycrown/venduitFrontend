import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import LandingHeader from '../../components/LandingComponents/landingHeader'

const LandingPage = () => {
  return (
    <Box>
      <LandingHeader/>
      <Text> This is HomePage container, containing all other components for the  landing page</Text>
    </Box>
  )
}

export default LandingPage