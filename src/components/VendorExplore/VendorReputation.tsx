import { Flex, Stack } from "@chakra-ui/react";
import VendorNav from "./VendorNav";
import Profile from "./Profile";
import Buttons from "./Buttons";
import Comments from "./Comments";
import ImgSlide from "./ImgSlide";
import PopupMessage from "./PopupMessage";

function VendorReputaion() {
  return (
    <Stack bg="lightgray">
      <Flex justifyContent='space-between' w="100%">
        <Stack w="400px">
          <VendorNav />
        </Stack>

        <Stack>
          <Flex mx="50px" mr="200px" my="40px" justifyContent="space-between">
            <Stack mr="150px">
              <Profile />
              <Comments />
            </Stack>

            <Stack>
              <Buttons />
              <Stack my={20}>
                <ImgSlide />
              </Stack>
            </Stack>
          </Flex>
        </Stack>
      </Flex>

      <PopupMessage/>
    </Stack>
  );
}

export default VendorReputaion;
