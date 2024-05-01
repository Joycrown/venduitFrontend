/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Box, HStack, Text } from "@chakra-ui/react"



const ProductCard = ({product}:any) => {
  return (
    <Box 
      borderRadius="10px" 
      minW="250px" 
      overflow="hidden"
      p={5}
      shadow="0 4px 6px rgba(0, 0, 0, 0.4)">
      <HStack justifyContent="space-between">
        <HStack>
        <Avatar size="sm" src={product?.product_imageData}/>
        <Box>
          <Text fontSize={{base:"",md:"18px",lg:"15px"}} fontWeight="semibold" color="#000">{product?.product_name}</Text>
          <Text fontSize={{base:"",md:"15px",lg:"10px"}} fontStyle="italic" fontWeight="thin">{product?.product_desc}</Text>
        </Box>
        </HStack>
        <Box pt={2} pl={10}>
          <Text fontSize={{base:"",md:"15px",lg:"13px"}} fontWeight="semibold" color="#B6B6B6">N {product?.amount}</Text>
        </Box>
      </HStack>
    </Box>
  )
}

export default ProductCard