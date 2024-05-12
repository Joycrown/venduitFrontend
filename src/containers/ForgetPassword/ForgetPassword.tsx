/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import {
  InputGroup,
  Input,
  FormLabel,
  FormControl,
  Heading,
  Flex,
  Box,
  Text,
  useToast,
} from "@chakra-ui/react";
import LogoImage from "../../components/LogoImage/LogoImage";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LandingHeader from "../../components/LandingComponents/landingHeader";
import { useForgotpasswordMutation } from "../../services/api";

export default function ForgetPassword() {
 
  const [forgotpassword,{isSuccess,isError,error,isLoading}]  = useForgotpasswordMutation()
  const toast = useToast()
  const schema = yup
    .object()
    .shape({
      email: yup.string().email().required("Email is required"),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    forgotpassword(data)

  };
  useEffect(()=>{
    if(isSuccess){
    toast({
      title:"Success",
      description:"Check your Email for further instructions.",
      status:"success",
      isClosable: true,
    })
    reset()
    }else if( isError){
      try {
        // Attempt to handle server errors
        toast({
          title:  (error as any)?.data.detail,
          position: "top-right",
          status: "error",
          isClosable: true,
        });
      } catch (error) {
        // If there's an error while handling server errors, display a connection error toast
        toast({
          title: "Server not responding now",
          position: "top-right",
          status: "error",
          isClosable: true,
        });
      }
    }
  },[isSuccess,error,isError])

  return (
    <Box>
      <LandingHeader/>
      <LogoImage m="-20px" />

      <Flex
        align={["", "", "center"]}
        h="80vh"
        justify="center"
        direction="column"
      >
        {/* Sign Up form */}
        <Box
          bg={["", "", "#EEEDF0"]}
          maxW="600px"
          w="100%"
          mx={["", "", "auto"]}
          p={["", "", "10"]}
          borderRadius={40}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Heading as="h3" my={10}>
              Forgot your password
            </Heading>
            <Text my={10}>
              Enter the email address associated with your account. We'll send
              you a link to login and reset your password.
            </Text>

            <FormControl px={["", "", "", "0"]} my={[2, 2, 2]}>
              <FormLabel>Email</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  placeholder="me@email.com"
                  size="lg"
                  fontSize={["xs", "", "lg"]}
                  border={"1px solid black"}
                  {...register("email")}
                />
              </InputGroup>
              {errors.email && (
                <Text color="red.500">{errors.email?.message}</Text>
              )}
            </FormControl>

            {/* Agreement Checkbox */}

            <Box
              as="button"
              type="submit"
              p={4}
              px={["", "", "35"]}
              mt={10}
              w="100%"
              bg="brand.primary"
              borderRadius={50}
              color="white"
            >
              {isLoading ? "Sending link...":"Send me the link"}
              
            </Box>

            <Text mt={5} textAlign="center">
              If you still need help, visit out our Help center
            </Text>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}
