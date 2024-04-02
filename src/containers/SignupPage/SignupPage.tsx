import { useState } from "react";
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
  Button,
  
  Switch,
  Icon,
} from "@chakra-ui/react";
import LineImage from "../../assets/icons/Line 10.png";
import HeroImage from "../../components/HeroImage/HeroImage";
import AppleLogin from "../../components/LoginComponents/AppleLogin";
import GoogleLogin from "../../components/LoginComponents/GoogleLogin";
import LogoImage from "../../components/LogoImage/LogoImage";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import cancel from "../../assets/icons/cancel_black_24dp 1.svg";
import check from "../../assets/icons/check_circle_black_24dp 1.svg";

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const schema = yup
    .object()
    .shape({
      email: yup.string().email().required("Email is required"),
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
    console.log(data);
    //sent data

    setSubmitting(true);
    reset();
  };

  return (
    <Box>
      <Flex
        justify="center"
        align={"center"}
        direction={["column", "column", "row"]}
      >
        <HeroImage />

        {/* SignUp Form */}
        <Box w={["100", "100", "50"]} p={["1", "0", "", "0"]} flex={1}>
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

          {/* Third Party authentication */}
          <GoogleLogin />
          <AppleLogin />

          {/* Line */}
          <Flex
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
          </Flex>

          {/* Sign Up form */}
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Enter Email */}
            <FormControl px={["", "", "", "0"]} my={[2, 2, 2]}>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="me@mail.com"
                size="lg"
                {...register("email")}
              />

              {errors.email && (
                <Text color="red.500">{errors.email?.message}</Text>
              )}
            </FormControl>

                {/* Enter Password */}
            <FormControl px={["", "", "", "0"]} my={[2, 2, 2]}>
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  type={showPassword ? "text" : "password"}
                  pr="4.5rem"
                  placeholder="Enter password"
                  size="lg"
                  fontSize={["xs", "", ""]}
                  {...register("password")}
                />
                <InputRightElement width="4.5rem" display={"flex"} h="100%">
                  <Box onClick={() => setShowPassword(!showPassword)}>
                    <Icon as={showPassword ? FaEye : FaEyeSlash} />
                  </Box>
                </InputRightElement>
              </InputGroup>
              {errors.password && (
                <Text color="red.500">{errors.password?.message}</Text>
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
            >
              <Switch id="agreement" p={2} {...register("agree")} />
              <FormLabel htmlFor="agreement" fontSize={["", "", "xs", "md"]}>
                I agree to Venduit's Terms of use and Privacy policy. I also
                consent to receive communications from Venduit.
              </FormLabel>
            </FormControl>
            {errors.email && (
              <Text color="red.500">{errors.agree?.message}</Text>
            )}
            <Button
              type="submit"
              px={["", "", "35"]}
              mt={5}
              w="100%"
              size="lg"
              bg="brand.primary"
              borderRadius={50}
              color="white"
              isLoading={submitting}
              loadingText="Submitting..."
            >
              Sign up Free{" "}
            </Button>
            <Text m={3} textAlign="center">
              Already have an account? Log in
            </Text>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}

export default SignupPage;
