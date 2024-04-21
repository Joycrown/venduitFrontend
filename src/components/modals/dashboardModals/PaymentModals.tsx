/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Drawer, DrawerBody, DrawerContent, DrawerOverlay, HStack, Heading} from '@chakra-ui/react'
import { IoArrowBack } from 'react-icons/io5'
import { useState } from 'react';
import EnterVendorForm from './EnterVendorForm';
import ProductDetails from './ProductDetails';
// import ReviewDetails from './ReviewDetails';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setVendorId } from '../../../services/productSlice';
import { RootState } from '../../../services/store';


const MakePayment = ({isOpen, onClose}:any) => {
  const [step, setStep] = useState(1);
	// const [formData, setFormData] = useState({});
  const dispatch = useDispatch()


  const full_order = useSelector((state: RootState) => state.product);

 

  const handleEnterVendorSubmit = (data:any) => {
 
    // setFormData(data);
  
    // const vendor_id = data
    console.log(full_order)
    dispatch(setVendorId(data.vendor_id))
    setStep(2)
  

  };

  const handleProductDetailsSubmit = async (data:any) => {
    try {
      // Dispatch action to update store with data.product
      await dispatch(setProducts(data.product)); // Replace with your action call

      // Handle successful submission (e.g., navigate to next component)
      // setStep(3);
    } catch (error) {
      console.error("Error submitting product details:", error);
    } 
    
   
   

  };
  // const handleReviewDetailsSubmit = (data:any) => {
  //   const  fullData = {...formData, ...data};
  //   setFormData(fullData);
  //   console.log(formData)
  //   setStep(3);

  // };

  const  handlePrevious = () =>{
    if(step > 1){ 
     
      setStep(step - 1)
    }
    else{
      onClose()
    }
  }
const handlePreviousStep = (data :any) => {
  dispatch(setProducts(data.product))
  setStep(step - 1)

}

  return (
    <>
    
		{/* {step === 2 && <Step2Form onSubmit={handleStep2Submit} isLoading={isLoading} />} */}
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size="sm"
      >
        <DrawerOverlay/>
        <DrawerContent>
        <HStack px="5%" pt={10} gap={16}>
          <Box>
            <IoArrowBack size="1.5rem" onClick={step === 2 ? handlePreviousStep : handlePrevious} cursor="pointer" />
          </Box>
        <Heading fontSize="20px">{step === 1 ? ("Make a Payment") : step === 2 ? ("Enter Product details"): "Review Payment Details" }</Heading>
        </HStack>
          <DrawerBody>
          {step === 1 && <EnterVendorForm onSubmit={handleEnterVendorSubmit} />}
          {step === 2 && <ProductDetails onSubmit={handleProductDetailsSubmit} />}
          {/* {step === 3 && <ReviewDetails onSubmit={handleReviewDetailsSubmit } />} */}
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MakePayment