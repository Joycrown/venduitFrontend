import React, {ReactElement} from "react";
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
  Checkbox,
  InputRightElement,
  Button,
  FormErrorMessage,
  Switch,
} from "@chakra-ui/react";
import LineImage from "../../assets/icons/Line 10.png";
import HeroImage from "../../components/HeroImage/HeroImage";
import AppleLogin from "../../components/LoginComponents/AppleLogin";
import GoogleLogin from "../../components/LoginComponents/GoogleLogin";

export default function LoginPage() {
  return (
    <Box >
      <Flex justify="center" align={"center"} direction={["column", "column", "row"]}>

        <HeroImage />


        {/* Login Form */}
        <Box w={["100","100","50"]} p={["1","0","","0"]} flex={1}>
          <Heading textAlign="center" px={[3,3,4]} fontSize={["md","lg","2xl","1xl"]}>
            Discover credible vendors.
            <br />
            Free on Venduit.
          </Heading>

          
          {/* Third Party authentication */}
          <GoogleLogin />
          <AppleLogin />

          {/* Line */}
          <Flex align="center" justify="center" w="100%" py={0} fontSize={["2xl","lg","sm"]}>
            <Box>
              <Image src={LineImage} alt="line" />
            </Box>
            <Text p={1}>OR</Text>
            <Box>
              <Image src={LineImage} alt="line" />
            </Box>
          </Flex>

          
          {/* Sign Up form */}
          <form>
            <FormControl px={["","","","0"]} my={[2,2,2]}>
              <FormLabel>Email</FormLabel>
              <Input placeholder="me@mail.com" size="lg" />
            </FormControl>

            <FormControl px={["","","","0"]} my={[2,2,2]}  >
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input pr="4.5rem" placeholder="Enter password" size="lg" fontSize={["xs","","",]} />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm"></Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>


            {/* Agreement Checkbox */}
            <FormControl px={["","","","0"]} mt={5} display="flex" alignItems="center">
              <Switch id="agreement" p={2} />
              <FormLabel htmlFor="agreement"fontSize={["","","xs","md"]}>
              Remember me on this device
              </FormLabel>
            </FormControl>
            <Button px={["","","35"]} mt={5} w="100%" size="lg" bg="brand.primary" borderRadius={50} color="white">
              Log in{" "}
            </Button>
            <Button variant="outline" px={["","","35"]} mt={5} w="100%" size="lg" border='1px' borderRadius={50} >
             Forget password?{" "}
            </Button>
            <Text m={3} textAlign="center">New to Venduit? Sign up</Text>
          </form>
        </Box>
      </Flex>
    </Box>
  )
}
