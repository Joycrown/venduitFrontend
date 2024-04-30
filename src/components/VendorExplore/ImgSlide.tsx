import { Stack, Flex } from "@chakra-ui/react";
import img from "../../assets/images/rr.jpg";

function ImgSlide() {
  return (
    <Stack >
        <Stack>
        <img src={img} alt="" />
        </Stack>
     

      <Flex w={40} h={60} gap={3} my={50}>
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
      </Flex>
    </Stack>
  );
}

export default ImgSlide;
