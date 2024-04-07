
import { Button, Image, Text } from "@chakra-ui/react";
import AppleImage from "../../assets/icons/icons8-apple-logo 1.svg";

export default function AppleLogin() {
  return (
    <>
      <Button
        variant="outline"
        colorScheme="black"
        borderRadius="full"
        w={{base:"100%",md:"80%",lg:"90%"}}
        h="100%"
        p={3}
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
    </>
  );
}
