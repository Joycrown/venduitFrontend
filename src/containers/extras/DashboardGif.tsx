import { Box, Text, VStack } from '@chakra-ui/react'
import Lottie from 'react-lottie-player'
import dashboardgif from "../../utils/dashboardGif.json"

const DashboardGif = () => {
  return (
    <Box>
      
      <VStack>
        <Text color="blue"> Page is stil under construction, do check back later</Text>
        <Lottie animationData={dashboardgif} loop play style={{ width: 400, height: 300 }}/>
      </VStack>
    </Box>
  )
}

export default DashboardGif