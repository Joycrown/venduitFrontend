import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import AppleImage from "../../assets/icons/icons8-apple-logo 1.svg";

export default function AppleLogin() {
  return (
    <Box px={["0","","","35"]}  py={[2, 2, 2]}>
      <Button
        variant="outline"
        colorScheme="black"
        borderRadius="full"
        w="100%"
        h="100%"
        p={2}
        _hover={{ bg: '#ebedf0'}}
        _active={{
          bg: "#dddfe2",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
      >
        <Image src={AppleImage} alt="apple logo" px={5} />
        <Text fontSize={["sm","","",""]}>Sign in with Apple</Text>
      </Button>
    </Box>
  );
}
