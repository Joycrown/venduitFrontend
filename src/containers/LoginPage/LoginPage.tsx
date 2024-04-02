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
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const schema = yup
    .object()
    .shape({
      email: yup.string().email().required("Email is required"),
      password: yup
        .string()
        .required("Password is required")
        .min(8, "Use at least 8 characters"),
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

        {/* Login Form */}
        <Box w={["100", "100", "50"]} p={["1", "0", "", "0"]} flex={1}>
          <Heading
            textAlign="center"
            px={[3, 3, 4]}
            fontSize={["md", "lg", "2xl", "1xl"]}
          >
            Discover credible vendors.
            <br />
            Free on Venduit.
          </Heading>

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
                <InputRightElement width="4.5rem">
                  <Box onClick={() => setShowPassword(!showPassword)}>
                    <Icon as={showPassword ? FaEye : FaEyeSlash} />
                  </Box>
                </InputRightElement>
              </InputGroup>
              {errors.password && (
                <Text color="red.500">{errors.password?.message}</Text>
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
              <FormLabel htmlFor="remeber" fontSize={["", "", "xs", "md"]}>
                Remember me on this device
              </FormLabel>
            </FormControl>
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
              loadingText="Loging in..."
            >
              Log in{" "}
            </Button>

            {/* Forget Password */}
            <Button
              variant="outline"
              type="submit"
              px={["", "", "35"]}
              mt={5}
              w="100%"
              size="lg"
              border="1px"
              borderRadius={50}
              
            >
              Forget password?{" "}
            </Button>
            <Text m={3} textAlign="center">
              New to Venduit? Sign up
            </Text>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}
