/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Image, Stack, Text } from "@chakra-ui/react"
import { FaStar } from "react-icons/fa"


const ProductCard = ({item}:any) => {
  return (
    <Box borderRadius="20px" minW="200px" overflow="hidden" bgColor="#fff" border="1px" borderColor="#777373" shadow="0 4px 6px rgba(0, 0, 0, 0.2)">
      <Image src={item.product_img} boxSize="210px"/>
      <Stack direction="row" pt={4} color="#000" px="5%">
        <Box>
          <Text fontSize={{base:"",md:"18px",lg:"15px"}} fontWeight="semibold" color="#000">{item.product_name}</Text>
          <Text fontSize={{base:"",md:"15px",lg:"13px"}} fontWeight="semibold" color="#5D2FE0">{item.product_desc}</Text>
        </Box>
      </Stack>
      <Stack direction="row" gap={14} pt={2} px="5%">
        <Text fontSize={{base:"",md:"15px",lg:"13px"}} fontWeight="semibold" color="#B6B6B6">{item.location}</Text>
        <Stack direction="row" pb={4}>
          <Text fontSize={{base:"",md:"15px",lg:"14px"}} fontWeight="semibold" color="#5D2FE0">{item.rating}</Text>
          <FaStar size="1rem" style={{color:"#5D2FE0"}} />
        </Stack>
      </Stack>
    </Box>
  )
}

export default ProductCard