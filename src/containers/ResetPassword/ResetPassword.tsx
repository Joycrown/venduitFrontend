import { useState } from "react";
import {
  InputRightElement,
  InputGroup,
  Input,
  FormLabel,
  FormControl,
  Heading,
  Flex,
  Box,
  Button,
  Image,
  Text,
  Icon,
} from "@chakra-ui/react";
import LogoImage from "../../components/LogoImage/LogoImage";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import cancel from "../../assets/icons/cancel_black_24dp 1.svg";
import check from "../../assets/icons/check_circle_black_24dp 1.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // toggle passwords visibility

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const schema = yup
    .object()
    .shape({
      password: yup
        .string()
        .required("Password is required")
        .min(8, "Use at least 8 characters")
        .matches(/^(?=.*[a-z])/, "Use at least 1 lowercase letter")
        .matches(/^(?=.*[A-Z])/, "Use at least 1 uppercase letter")
        .matches(/^(?=.*\d)/, "Use at least one number"),
      confirmpassword: yup
        .string()
        .oneOf([yup.ref("password"), ], "Passwords must match")
        .required("Passwords must match"),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    watch,
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

  // Watch password value
  const pswdValue = watch("password");
  const pswdlength = pswdValue ? pswdValue.length : 0;
  const ConPassValue = watch("confirmpassword");

  return (
    <Box>
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
            <Heading as="h3" my={["5","","","10"]}>
              Reset your password
            </Heading>
            <Text my={["","","","10"]}>Create a new password for your Venduit account.</Text>

            {/* Enter Password */}
            <FormControl px={["", "", "", "0"]} my={[2, 2, 2]}>
              <FormLabel fontWeight="bold">New password</FormLabel>
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

            {/* Confirm Password */}
            <FormControl px={["", "", "", "0"]} my={[2, 8, 2]}>
              <FormLabel fontWeight="bold">Comfirm new password</FormLabel>
              <InputGroup size="md">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  pr="4.5rem"
                  placeholder="Enter password"
                  size="lg"
                  fontSize={["xs", "", ""]}
                  {...register("confirmpassword")}
                />
                <InputRightElement width="4.5rem" display={"flex"} h="100%">
                  <Box
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <Icon as={showConfirmPassword ? FaEye : FaEyeSlash} />
                  </Box>
                </InputRightElement>
              </InputGroup>
              {errors.confirmpassword && (
                <Text color="red.500">{errors.confirmpassword?.message}</Text>
              )}
            </FormControl>

            {/* Confirm Password Error Message */}
            <Text fontSize="xs" my={2} display={"flex"}>
              Must match with the password above
              {pswdValue !== "" && pswdValue !== ConPassValue ? (
                <Image src={cancel} />
              ) : (
                <Image src={check} />
              )}
            </Text>

            <Button
              type="submit"
              px={["", "", "35"]}
              mt={["5","8","10","10","10"]}
              w="100%"
              size="lg"
              bg="brand.primary"
              borderRadius={50}
              color="white"
              isLoading={submitting}
              loadingText="Resetting..."
            >
              Reset my password{" "}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}
