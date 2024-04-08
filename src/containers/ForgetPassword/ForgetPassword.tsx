/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  InputGroup,
  Input,
  FormLabel,
  FormControl,
  Heading,
  Flex,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import LogoImage from "../../components/LogoImage/LogoImage";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LandingHeader from "../../components/LandingComponents/landingHeader";

export default function ForgetPassword() {
  const [submitting, setSubmitting] = useState(false);

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
    console.log(data);
    //sent data

    setSubmitting(true);
    reset();
  };

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
                  fontSize={["xs", "", ""]}
                  border={"1px solid black"}
                  {...register("email")}
                />
              </InputGroup>
              {errors.email && (
                <Text color="red.500">{errors.email?.message}</Text>
              )}
            </FormControl>

            {/* Agreement Checkbox */}

            <Button
              type="submit"
              px={["", "", "35"]}
              mt={10}
              w="100%"
              size="lg"
              bg="brand.primary"
              borderRadius={50}
              color="white"
              isLoading={submitting}
              loadingText="Sending..."
            >
              Send me the link{" "}
            </Button>

            <Text mt={5} textAlign="center">
              If you still need help, visit out our Help center
            </Text>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}
