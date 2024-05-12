/* eslint-disable @typescript-eslint/no-explicit-any */
// StepForm.tsx
import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  HStack,
  Heading,
  DrawerContent,
  Center,
  useToast,
  Spinner,
} from '@chakra-ui/react';
import { IoArrowBack } from 'react-icons/io5';
import EnterVendorForm from './EnterVendorForm';
import ProductForm from './ProductDetails';
import ReviewDetails from './ReviewDetails';
import { useMakePaymentMutation } from '../../../services/api';


interface VendorInfo {
  vendor_id: string;
}

export interface Product {
  product_name: string;
  product_desc: string;
  amount: number;
  product_image?: File;
  product_imageData?: string; // To store the base64-encoded image or video data
}
export interface PaymentData {
  vendor_id: string;
  product_name: string;
  product_desc: string;
  amount: string;
  product_images?: File[]; // Optional if not all products have images
}
 export interface FormValues {
 VendorInfo: VendorInfo;
  products: Product[];
}

const MakePayment = ({isOpen,onClose }:any) => {
  const[makePayment, {isLoading,isSuccess,isError,error}] = useMakePaymentMutation()
  const [step, setStep] = useState<number>(1);
  const toast = useToast()
  const initialValues: FormValues = {
   VendorInfo: { vendor_id: '' },
    products: [{ product_name: '', product_desc: '', amount: 0 }],
  };

  const nextStep = () => {
    if (step === 1 || step === 2) {
      const form = document.querySelector('form');
      if (form && !form.checkValidity()) {
        form.reportValidity();
        return;
      }
    }
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    if (step > 1){
      setStep((prevStep) => prevStep - 1);
    }else{
      onClose()
    }
  };

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    setFieldValue: any
  ) => {
    const file = event.currentTarget.files && event.currentTarget.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === 'string') {
          setFieldValue(`products.${index}.product_imageData`, e.target.result); // Store base64-encoded image or video data
        }
      };
      reader.readAsDataURL(file);
      setFieldValue(`products.${index}.product_image`, file);
    }
  };

  
  const handleSubmit = async (values: FormValues) => {
    const paymentData: PaymentData = {
      vendor_id: values.VendorInfo.vendor_id,
      product_name: values.products.map((product) => product.product_name).join(','),
      product_desc: values.products.map((product) => product.product_desc).join(','),
      amount: values.products.map((product) => product.amount).join(','),
      product_images: [], // Initialize product_images as an empty array
    };
  
    // Append product images if available
    values.products.forEach((product: any) => {
      if (product.product_image) {
        paymentData.product_images!.push(product.product_image); // Use '!' to assert that product_images is defined
      }
    });
     
    // Make the payment using the makePayment mutation
    try {
      await makePayment(paymentData);
      // Handle success
    } catch (error) {
      toast({
        title: error as any,
        position: "top-right",
        status: "error",
        isClosable: true,
      });
    }
  };
  useEffect(()=>{
    if(isSuccess){
      toast({
        title: "Successful",
        position: "top-right",
        status: "success",
        isClosable: true,
      });
    }
  },[isSuccess,toast])

  useEffect(() => {
    try {
      if (isError) {
        toast({
          title:  (error as any)?.data.detail,
          position: "top-right",
          status: "error",
          isClosable: true,
        });
      }
    } catch (e) {
      toast({
        title: "Connection Error",
        position: "top-right",
        status: "error",
        isClosable: true,
      });
    }
  }, [isError, error, toast]);
  



  return (
    <>
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      size="sm"
    >
      <DrawerOverlay/>
      <DrawerContent >
        <HStack px="5%" pt={10} gap={16}>
          <Box>
            <IoArrowBack size="1.5rem" onClick={prevStep} cursor="pointer" />
          </Box>
          <Heading fontSize="20px">{step === 1 ? ("Make a Payment") : step === 2 ? ("Enter Product details"): "Review Payment Details" }</Heading>
        </HStack>
        <DrawerBody>
          <Box p={5}>
            <Formik initialValues={initialValues} onSubmit= {handleSubmit}>
              {({ values, setFieldValue }) => (
                <Form>
                  {step === 1 && (
                    <EnterVendorForm setFieldValue={setFieldValue} values={values} nextStep={nextStep}/>
                  )}
                  {step === 2 && (
                    <ProductForm setFieldValue={setFieldValue} handleImageChange={handleImageChange} values={values} nextStep={nextStep}/>
                  )}
                  {step === 3 && (
                    <>
                      <ReviewDetails values={values} />
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
                         {isLoading? 
                         <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='sm'
                          />: "Submit"}
                        </Box>
                      </Center>
                    </>
                  )}
                </Form>
              )}
            </Formik>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
    
    
    </>
   
  );
};

export default MakePayment;
