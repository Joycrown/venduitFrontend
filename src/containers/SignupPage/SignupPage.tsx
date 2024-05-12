/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  Input,
  Heading,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Icon,
  Select,
  useToast,
  Link,
  Switch,
} from "@chakra-ui/react";

import HeroImage from "../../components/HeroImage/HeroImage";
import LogoImage from "../../components/LogoImage/LogoImage";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import cancel from "../../assets/icons/cancel_black_24dp 1.svg";
import check from "../../assets/icons/check_circle_black_24dp 1.svg";
import LandingHeader from "../../components/LandingComponents/landingHeader";
import { useUserSignupMutation } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../utils/routes/routePaths";




function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast()
  const navigate = useNavigate()
  const [signUp,{isLoading, isError, error, isSuccess}] = useUserSignupMutation()
  const schema = yup
    .object()
    .shape({
      email: yup.string().email().required("Email is required"),
      full_name: yup.string().required("Full Name is required"),
      user_type: yup.string().required("User type is required"),
      password: yup
        .string()
        .required("Password is required")
        .min(8, "Use at least 8 characters")
        .matches(/^(?=.*[a-z])/, "Use at least 1 lowercase letter")
        .matches(/^(?=.*[A-Z])/, "Use at least 1 uppercase letter")
        .matches(/^(?=.*\d)/, "Use at least one number"),
      agree: yup.bool().oneOf([true], "You must agree to continue"),
    })
    .required();


    
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Watch password value
  const pswdValue = watch("password");
  const pswdlength = pswdValue ? pswdValue.length : 0;

  const onSubmit = (data: any) => {
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {agree, ...formData} = data
    //sent data
    signUp(formData)
  
    reset();
  };

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Successful",
        position: "top-right",
        status: "success",
        isClosable: true,
      });
      navigate(RoutePaths.LOGIN)
    } else if (isError) {
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
  }, [isSuccess, isError,error,toast,navigate]);
  

  return (
    <Box>
      <LandingHeader/>
      <Flex
        justifyContent="center"
        alignContent="center"
        direction={{base:"column",md:"row",lg:"row"}}
        px={{base:"5%",md:"unset"}}
      >
       <HeroImage/>

        {/* SignUp Form */}
        <Box w={{base:"",md:"",lg:"50%"}} p={["1", "0", "", "0"]} flex={1}>
          <Box>
            <LogoImage m="auto" />
          </Box>
          <Heading
            textAlign="center"
            px={[3, 3, 4]}
            my={["0", "10", "0", "0px"]}
            fontSize={["md", "2xl", "2xl", "1xl"]}
          >
            Discover credible vendors.
            <br />
            Free on Venduit.
          </Heading>
          <Text
            textAlign="center"
            px={35}
            py={2}
            fontSize={["2xl", "lg", "xl", "2xl"]}
            fontWeight="bold"
            display={["none", "none", "block"]}
          >
            Sign up to get started.
          </Text>

          {/* Sign Up form */}
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Enter Email */}
            <FormControl px={["", "", "", "0"]} my={[2, 2, 2]}>
              <FormLabel fontSize={{base:"14px",md:"16px",lg:""}}>Full Name</FormLabel>
              <Input
                placeholder="full name"
                size="lg"
                fontSize={{base:"14px",md:"16px",lg:""}}
                {...register("full_name")}
                width={{base:"100%",md:"90%",lg:"95%"}}
              />

              {errors.email && (
                <Text color="red.500" pt={2} fontSize={{base:"12px",md:"14px",lg:"16px"}}>{errors.email?.message}</Text>
              )}
            </FormControl>
            <FormControl px={["", "", "", "0"]} my={[2, 2, 2]} pt={5}>
              <FormLabel fontSize={{base:"14px",md:"16px",lg:""}}>Email</FormLabel>
              <Input
                placeholder="me@mail.com"
                size="lg"
                fontSize={{base:"14px",md:"16px",lg:""}}
                width={{base:"100%",md:"90%",lg:"95%"}}
                {...register("email")}
              />

              {errors.email && (
                <Text color="red.500" pt={2} fontSize={{base:"12px",md:"14px",lg:"16px"}}>{errors.email?.message}</Text>
              )}
            </FormControl>
            <FormControl px={["", "", "", "0"]} my={[2, 2, 2]} pt={5}>
              <FormLabel fontSize={{base:"14px",md:"16px",lg:""}}>User Type</FormLabel>
              <Select
                placeholder='Choose an option'
                size="lg"
                fontSize={{base:"14px",md:"16px",lg:""}}
                width={{base:"100%",md:"90%",lg:"95%"}}
                {...register("user_type")}
                >
                  <option value='buyer'>Buyer</option>
                  <option value='vendor'>Vendor</option>
                </Select>
              

              {errors.user_type && (
                <Text color="red.500" pt={2} fontSize={{base:"12px",md:"14px",lg:"16px"}}>{errors.user_type?.message}</Text>
              )}
            </FormControl>

                {/* Enter Password */}
            <FormControl px={["", "", "", "0"]} my={[2, 2, 2]} pt={5}>
              <FormLabel fontSize={{base:"14px",md:"16px",lg:""}}>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  type={showPassword ? "text" : "password"}
                  pr="4.5rem"
                  placeholder="Enter password"
                  size="lg"
                  fontSize={{base:"14px",md:"16px",lg:""}}
                  width={{base:"100%",md:"90%",lg:"95%"}}
                  {...register("password")}
                />
                <InputRightElement width="7.5rem" display={"flex"} h="100%">
                  <Box onClick={() => setShowPassword(!showPassword)}>
                    <Icon as={showPassword ? FaEye : FaEyeSlash} />
                  </Box>
                </InputRightElement>
              </InputGroup>
              {errors.password && (
                <Text color="red.500" pt={2} fontSize={{base:"12px",md:"14px",lg:"16px"}}>{errors.password?.message}</Text>
              )}
            </FormControl>

            {/* Passwords Error */}
            <Box px={["", "", "", "0"]}>
              <Text fontSize="xs" my={2} display={"flex"}>
                Use at least 8 characters.
                {pswdlength < 8 ? (
                  <Image src={cancel} />
                ) : (
                  <Image src={check} />
                )}
              </Text>
              <Text fontSize="xs" my={2} display={"flex"}>
                Use at Least 1 uppercase letter.
                {!/[A-Z]/.test(pswdValue) ? (
                  <Image src={cancel} />
                ) : (
                  <Image src={check} />
                )}
              </Text>
              <Text fontSize="xs" my={2} display={"flex"}>
                Use at least 1 lowercase letter.
                {pswdlength > 0 && /[a-z]/.test(pswdValue) ? (
                  <Image src={check} />
                ) : (
                  <Image src={cancel} />
                )}
              </Text>
              <Text fontSize="xs" my={2} display={"flex"}>
                Use at least 1 number.
                {!/[0-9]/.test(pswdValue) ? (
                  <Image src={cancel} />
                ) : (
                  <Image src={check} />
                )}
              </Text>
            </Box>

            {/* Agreement Checkbox */}
            <FormControl
              px={["", "", "", "0"]}
              mt={5}
              display="flex"
              alignItems="center"
              pt={5}
            >
              <Switch id="agreement" p={2} {...register("agree")} />
              <FormLabel htmlFor="agreement" fontSize={{base:"12px",md:"14px",lg:""}}>
                I agree to Venduit's Terms of use and Privacy policy. I also
                consent to receive communications from Venduit.
              </FormLabel>
            </FormControl>
            {errors.email && (
              <Text color="red.500" pt={2} fontSize={{base:"12px",md:"14px",lg:"16px"}}>{errors.agree?.message}</Text>
            )}
            <Box
              as= "button"
              type="submit"
              px={["", "", "35"]}
              mt={5}
              p={4}
              width={{base:"100%",md:"95%",lg:"95%"}}
              bg="brand.primary"
              borderRadius={50}
              color="white"
            >
             {isLoading ? "Registering...":" Sign up Free"}
            </Box>
            <Text m={3} textAlign="center">
              Already have an account? <Link href={RoutePaths.LOGIN} style={{textDecoration: "none"}}>Log in</Link> 
            </Text>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}

export default SignupPage;
