import { Box, Image } from '@chakra-ui/react'
import MainLogo from "../../assets/icons/logo main.svg"


const LandingHeader = () => {
  return (
   <Box >
      <Image src={MainLogo} alt="logo" display={["none", "none", "block"]} />
    {/* <Box bgColor="blue" color="#fff" p={5} borderRadius=".7rem">
      <Heading fontSize={{base:"12px", md:"14px", lg:"18px"}} fontWeight="bold"> This is the header component</Heading>
    </Box> */}
    
   </Box>
  )
}

export default LandingHeader