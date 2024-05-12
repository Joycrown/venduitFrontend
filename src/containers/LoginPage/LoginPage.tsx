/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  Box,
  Text,
  Flex,
  Input,
  Heading,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Switch,
  Icon,
  useToast,
  Link,
  Center,
} from "@chakra-ui/react";

import HeroImage from "../../components/HeroImage/HeroImage";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LandingHeader from "../../components/LandingComponents/landingHeader";
import { useLoginMutation } from "../../services/api";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../services/authSlice";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../utils/routes/routePaths";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
 

  const schema = yup
    .object()
    .shape({
      email: yup.string().email().required("Email is required"),
      password: yup
        .string()
        .required("Password is required")
        
        // remeber: yup.bool().oneOf([true], "You must agree to continue"),
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
  const dispatch = useDispatch();
  const toast = useToast()
  const navigate = useNavigate()
  const [login, { isLoading, isError, error:apiError, isSuccess, data:receivedData}] = useLoginMutation();
  
  const onSubmit = async (data: any) => {
    try {
      await login(data); // Destructure 'data' from the response
    } catch (error) {
      // console.error('Login failed', error);
    }
    reset();
  };
  useEffect(() => {
    if (isSuccess) {
      dispatch(loginSuccess(receivedData));
      toast({
        title: "Login Successful",
        position: "top-right",
        status: "success",
        isClosable: true,
      });
      navigate(RoutePaths.DASHBOARD)
      
    } 
  }, [isSuccess, isError,dispatch,navigate,toast,receivedData]);

  useEffect(() => {
    try {
      if (isError) {
        toast({
          title:  (apiError as any)?.data.detail,
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
  }, [isError, apiError, toast]);

  return (
    <Box>
      <LandingHeader/>
      <Flex
       justifyContent="center"
       alignContent="center"
       direction={{base:"column",md:"row",lg:"row"}}
       px={{base:"5%",md:"unset"}}
      >
        <HeroImage />

        {/* Login Form */}
        <Box w={{base:"",md:"",lg:"50%"}} p={["1", "0", "", "0"]} flex={1}>
          <Heading
            textAlign="center"
            px={[3, 3, 4]}
            py={5}
            fontSize={["md", "lg", "2xl", "1xl"]}
          >
            Discover credible vendors.
            <br />
            Free on Venduit.
          </Heading>

          {/* Third Party authentication */}
          {/* <VStack gap={4} py={2}>
            <GoogleLogin />
            <AppleLogin />
          </VStack> */}

          {/* Line */}
          {/* <Flex
            align="center"
            justify="center"
            w="100%"
            py={0}
            fontSize={["2xl", "lg", "sm"]}
          >
            <Box>
              <Image src={LineImage} alt="line" />
            </Box>
            <Text p={1}>OR</Text>
            <Box>
              <Image src={LineImage} alt="line" />
            </Box>
          </Flex> */}

          {/* Sign Up form */}

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Enter Email */}
            <FormControl px={["", "", "", "0"]} my={[2, 2, 2]}>
              <FormLabel fontSize={{base:"14px",md:"16px",lg:""}}>Email</FormLabel>
              <Input
                placeholder="me@mail.com"
                size="lg"
                fontSize={{base:"14px",md:"16px",lg:""}}
                width={{base:"100%",md:"95%",lg:"95%"}}
                {...register("email")}
              />
              {errors.email && (
                <Text color="red.500" pt={2} fontSize={{base:"12px",md:"14px",lg:"16px"}}>{errors.email?.message}</Text>
              )}
            </FormControl>

            {/* Enter Password */}
            <FormControl px={["", "", "", "0"]} my={[2, 2, 2]}>
              <FormLabel fontSize={{base:"14px",md:"16px",lg:""}}>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  type={showPassword ? "text" : "password"}
                  // pr="4rem"
                  placeholder="Enter password"
                  size="lg"
                  width={{base:"100%",md:"95%",lg:"95%"}}
                  fontSize={{base:"14px",md:"16px",lg:""}}
                  {...register("password")}
                />
                <InputRightElement width="8.5rem">
                  <Box onClick={() => setShowPassword(!showPassword)}>
                    <Icon as={showPassword ? FaEye : FaEyeSlash} />
                  </Box>
                </InputRightElement>
              </InputGroup>
              {errors.password && (
                <Text color="red.500" pt={2} fontSize={{base:"12px",md:"14px",lg:"16px"}}>{errors.password?.message}</Text>
              )}
            </FormControl>

            {/* Agreement Checkbox */}
            <FormControl
              px={["", "", "", "0"]}
              mt={5}
              display="flex"
              alignItems="center"
            >
              <Switch id="remeber" p={2} />
              <FormLabel htmlFor="remeber" fontSize={{base:"14px",md:"16px",lg:""}}>
                Remember me on this device
              </FormLabel>
            </FormControl>
            <Box
              as="button"
              type="submit"
              p={4}
              px={["", "", "35"]}
              mt={5}
              width={{base:"100%",md:"95%",lg:"95%"}}
              bg="brand.primary"
              borderRadius={50}
              color="white"
            >
              {isLoading ? "Signing in...":" Sign In"}
            </Box>

            {/* Forget Password */}
            <Link href={RoutePaths.FORGOT_PASSWORD} style={{textDecoration: "none"}}>
              <Box
                p={4}
                px={["", "", "35"]}
                mt={5}
                width={{base:"100%",md:"95%",lg:"95%"}}
                border="1px"
                borderRadius={50}
                textAlign="center"
              >
                Forget password?{" "}
              </Box>
            
            </Link>
            <Center>
              <Box  m={3} textAlign="center">
                New to Venduit? <Link href="/signup" style={{textDecoration: "none"}}>Sign up</Link>
              </Box>
            </Center>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}
