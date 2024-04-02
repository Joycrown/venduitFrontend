import React from 'react'
import { Box, Button, ButtonGroup, Image, Text } from "@chakra-ui/react";
import GoogleImage from "../../assets/icons/icons8-google 1.svg";

export default function GoogleLogin() {
  return (
    <Box px={["0","","","35"]} py={[0, 2, 2]} >
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
      <Image src={GoogleImage} alt="apple logo" px={5} />
      <Text fontSize={["sm","","",""]}>Sign in with Google</Text>
    </Button>
  </Box>
  )
}
