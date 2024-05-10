/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, useFieldArray } from 'react-hook-form';
import { Box, FormLabel, Input, Center,Text } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';




type FormValues = {
  product:{
    product_name: string
    amount: string
    product_desc: string
    product_img: File | null
  }[]
}
const ProductDetails = ({onSubmit}:any) => {
  // const OrderedProduct = useSelector((state: RootState) => state.product.products);
  const defaultValues =  {
    product: [{
      product_name: "",
      amount: "",
      product_desc: "",
      product_img: null
    }], // Set default values to OrderedProduct if available
  }

  const schema = yup.object().shape({
    product: yup.array().of(
      yup.object().shape({
        product_name: yup.string().required("Product name is required"),
        amount: yup.string().required("Amount is required"),
      })
    )
  });

  const { control, handleSubmit, formState: { errors }, register } = useForm<FormValues>({
   
    resolver : yupResolver(schema) as any,
    defaultValues
  });
  const { fields, append, remove} = useFieldArray({
    control,
    rules:{
      required: "At least  set of details is needed"
    } ,
    name: "product", // Name of the field array in your form data
  });

 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* Your existing fields */}
    {fields.map((field, index) => (
      <Box key={field.id}>
        {/* Product Name Field */}
        <Box>
          <FormLabel fontWeight="semibold" opacity="50%" fontSize={{ base: "14px", md:"16px", lg: "15px" }} pt="14px">
            Product Name
          </FormLabel>
          <Input
            type="text"
            width={{base:"90%",md:"",lg:"90%"}}
            {...register(`product.${index}.product_name`)} // Use register to bind input to form data
            defaultValue={field.product_name} // Set a default value if
            fontSize={{ base: "16px", md:"16px", lg: "14px" }}
          />
        </Box>
        {errors.product && (
          <Text fontSize="10px" pt={2} color="red">{errors.product[index]?.product_name?.message}</Text>
        )}

        {/* Amount Field */}
        <Box>
          <FormLabel fontWeight="semibold" opacity="50%" fontSize={{ base: "14px", md:"16px", lg: "15px" }} pt="14px">
            Amount
          </FormLabel>
          <Input
            type="text"
            width={{base:"90%",md:"",lg:"90%"}}
            {...register(`product.${index}.amount`)}
            placeholder='N30,000'
            defaultValue={field.amount}
            fontSize={{ base: "16px", md:"16px", lg: "14px" }}
          />
        </Box>
        {errors.product && (
          <Text fontSize="10px" pt={2} color="red">{errors.product[index]?.amount?.message}</Text>
        )}
        {/* Product Description Field */}
        <Box>
          <FormLabel fontWeight="semibold" opacity="50%" fontSize={{ base: "14px", md:"16px", lg: "15px" }} pt="14px">
            Product Description (Optional)
          </FormLabel>
          <Input
            type="text"
            
            width={{base:"90%",md:"",lg:"90%"}}
            {...register(`product.${index}.product_desc`)}
            defaultValue={field.product_desc}
            fontSize={{ base: "16px", md:"16px", lg: "14px" }}
          />
        </Box>

        {/* Add Image or Video Field */}
        <Box>
          <FormLabel fontWeight="semibold" opacity="50%" fontSize={{ base: "14px", md:"16px", lg: "15px" }} pt="14px">
            Add Image or Video (Optional)
          </FormLabel>
          <Input
            type="file"
            variant="filled"
            pt={2}
            color="#000"
            opacity="50%"
            placeholder='Upload image/video'
            accept=".jpg,.jpeg,.png,.mp4" 
            css={{
              "&::-webkit-file-upload-button": {
                display: "none",
              },
              "&::before": {
                content: "''",
                display: "none",
              },
              "&::after": {
                content: "''",
                display: "none",
              },
            }}
            width={{base:"50%",md:"",lg:"70%"}}
            {...register(`product.${index}.product_img`)}
            // defaultValue={field.product_img !== null ? field.product_img : ''}
            fontSize={{ base: "13px", md:"16px", lg: "14px" }}
          />
        </Box>

        {/* Remove button */}
        <Box pt={5} cursor="pointer"fontWeight="semibold" opacity="50%" fontSize={{ base: "14px", md:"16px", lg: "15px" }} onClick={() => remove(index)}>Remove product</Box>

      </Box>
    ))}

    {/* Add more button */}
    <Box pt={5} cursor="pointer" fontWeight="semibold" opacity="50%" fontSize={{ base: "14px", md:"16px", lg: "15px" }} onClick={() => append({
      product_name:'',
      product_desc:'',
      amount:'',
      product_img: null
    })}>Add Another product +</Box>
   

    {/* Your Submit Button */}
    <Center pb={2} pt={24} color="#fff">
      <Box
        mt={3}
        as="button"
        type="submit"
        bg="#5D2FE0" 
        width={{base:"70%",md:"50%",lg:"75%"}}
        borderRadius="4px"          
        p={2}
        fontSize={{ base: "14px", md:"16px", lg: "14px" }}
      >
        Proceed
      </Box>
    </Center>
  </form>
  )
};

export default ProductDetails;
