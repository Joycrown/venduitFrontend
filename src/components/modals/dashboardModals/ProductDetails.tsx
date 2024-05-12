/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useEffect, useState } from 'react';
import { Box, Center, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react';
import { FieldArray } from 'formik';



const ProductForm = ({setFieldValue,values,nextStep,handleImageChange}:any) => {

  return (
    <>
      <Stack spacing={4} >
        <FieldArray name="products">
          {({ push, remove }) => (
            <Box>
              {values.products.map((product:any, index:number) => (
                <Box key={index}>
                  <FormControl>
                    <FormLabel fontWeight="semibold" opacity="50%" fontSize={{ base: "14px", md:"16px", lg: "15px" }} pt="14px">
                      Product name
                    </FormLabel>
                    <Input
                      name={`products.${index}.product_name`}
                      type="text"
                      width={{base:"90%",md:"",lg:"90%"}}
                      value={product.product_name}
                      fontSize={{ base: "16px", md:"16px", lg: "14px" }}
                      onChange={(e) =>
                        setFieldValue(
                          `products.${index}.product_name`,
                          e.target.value
                        )
                      }
                      required
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel fontWeight="semibold" opacity="50%" fontSize={{ base: "14px", md:"16px", lg: "15px" }} pt="14px">
                      Amount
                    </FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em'>
                        N
                      </InputLeftElement>
                      <Input
                        name={`products.${index}.amount`}
                        type="number"
                        width={{base:"90%",md:"",lg:"90%"}}
                        placeholder='Enter Amount'
                        fontSize={{ base: "16px", md:"16px", lg: "14px" }}
                        value={product.amount}
                        onChange={(e) =>
                          setFieldValue(
                            `products.${index}.amount`,
                            e.target.value
                          )
                        }
                        required
                      />
                     
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <FormLabel fontWeight="semibold" opacity="50%" fontSize={{ base: "14px", md:"16px", lg: "15px" }} pt="14px">
                      Product product_desc (Optional)
                    </FormLabel>
                    <Input
                      name={`products.${index}.product_desc`}
                      type="text"
                      value={product.product_desc}
                      width={{base:"90%",md:"",lg:"90%"}}
                      fontSize={{ base: "16px", md:"16px", lg: "14px" }}
                      onChange={(e) =>
                        setFieldValue(
                          `products.${index}.product_desc`,
                          e.target.value
                        )
                      }
                    />
                  </FormControl>
                  <FormControl pb={5}>
                    <FormLabel 
                      fontWeight="semibold" 
                      opacity="50%" 
                      fontSize={{ base: "14px", md:"16px", lg: "15px" }} pt="14px">
                      Add Image or Video (Optional)
                    </FormLabel>
                    <Input
                      name={`products.${index}.imageOrVideo`}
                      type="file"
                      variant="filled"
                      pt={2}
                      color="#000"
                      width={{base:"50%",md:"",lg:"70%"}}
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
                      onChange={(e) =>
                        handleImageChange(e, index, setFieldValue)
                      }
                    />
                    {values.products[index].product_image && (
                      <Text>
                        {values?.products[index]?.product_image?.name}
                      </Text>
                    )}
                  </FormControl>
                  {index > 0 && ( // Conditionally render "Remove Product" button
                    <Box  
                      onClick={() => remove(index)} 
                      pt={5} 
                      cursor="pointer" 
                      fontWeight="semibold" 
                      opacity="50%" 
                      fontSize={{ base: "14px", md:"16px", lg: "15px" }} > 
                      Remove Product
                    </Box>
                  )}
                </Box>
              ))}
              <Box onClick={() =>
                  push({ product_name: '', product_desc: '', amount: 0 })
                } pt={5} cursor="pointer" fontWeight="semibold" opacity="50%" 
                fontSize={{ base: "14px", md:"16px", lg: "15px" }} > Add Product
              </Box>
            
            </Box>
          )}

        </FieldArray>
        <Center pb={2} pt={24} color="#fff">
          <Box
            mt={3}
            as="button"
            onClick={nextStep}
            bg="#5D2FE0" 
            width={{base:"70%",md:"50%",lg:"75%"}}
            borderRadius="4px"          
            p={2}
            fontSize={{ base: "14px", md:"16px", lg: "14px" }}
          >
            Proceed
          </Box>
        </Center>
      </Stack>
    </>
  );
};

export default ProductForm;
