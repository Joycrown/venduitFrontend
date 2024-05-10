/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux";
import { RootState } from "../../../services/store";
import ProductCard from "../../utils/ProductCard";


const ReviewDetails = ({onSubmit}:any) => {
  const full_order = useSelector((state: RootState) => state.product);
 
  return (
   <Box p={5} border="1px" borderRadius="5%">
    <Text>
      Products Details
    </Text>
    {full_order?.products?.map((product, index:number)=>(
      <ProductCard product= {{...product}} key={index}/>
    ))}
    <Box onClick={onSubmit}>
      
    </Box>

   </Box>
  )
}

export default ReviewDetails