import { Box, Text, VStack } from '@chakra-ui/react'
import construction from "../../utils/underConstruction.json"
import Lottie from 'react-lottie-player'

const UnderConstruction = () => {
  return (
    <Box>
      <VStack>
        <Lottie animationData={construction} loop play style={{ width: 400, height: 400 }}/>
        <Text color="blue"> Page is stil under construction, do check back later</Text>

      </VStack>
    </Box>
  )
}

export default UnderConstruction