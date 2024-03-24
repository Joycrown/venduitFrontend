import React from "react";
import {
  Switch,
  InputRightElement,
  InputGroup,
  Input,
  FormLabel,
  FormControl,
  Heading,
  Flex,
  Box,
  Button,
  ButtonGroup,
  Image,
  Text,
} from "@chakra-ui/react";

export default function ForgetPassword() {
  return (
    <Flex align='center' h="80vh" justify="center" direction="column">
      {/* Sign Up form */}
      <Box bg="#EEEDF0" maxW="600px" h="80%" w="100%" mx="auto"  p={10} borderRadius={40}>

      
      <form >

        
        <Heading as="h3" my={5}>Forgot your password</Heading>
        <Text my={5}>Enter the email address associated with your account. We'll send you a link to login and reset your password.</Text>

        <FormControl px={["", "", "", "0"]} my={[2, 2, 2]}>
          <FormLabel>Email</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              placeholder="me@email.com"
              size="lg"
              fontSize={["xs", "", ""]}
              border={"1px solid black"}
            />
          </InputGroup>
        </FormControl>

        {/* Agreement Checkbox */}
        <FormControl
          px={["", "", "", "0"]}
          mt={5}
          display="flex"
          alignItems="center"
        >
          <Switch id="agreement" p={2} />
          <FormLabel htmlFor="agreement" fontSize={["", "", "xs", "md"]}>
            Remember me on this device
          </FormLabel>
        </FormControl>
        <Button
          px={["", "", "35"]}
          mt={5}
          w="100%"
          size="lg"
          bg="brand.primary"
          borderRadius={50}
          color="white"
        >
          Send me the link{" "}
        </Button>

        <Text mt={5} textAlign="center">If you still need help, visit out our Help center</Text>
      </form>
      </Box>
    </Flex>
  );
}
