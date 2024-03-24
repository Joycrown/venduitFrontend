
import { Box, Image } from "@chakra-ui/react";
import HeroImg from "../../assets/images/Photos header.svg";

export default function HeroImage() {
  return (
    <Box w={["100%", "100%", "50%"]} h="100%" p={["0", "0", "10"]}>
      <Image src={HeroImg} boxSize="100%" objectFit="cover" alt="hereoImage" />
    </Box>
  );
}
