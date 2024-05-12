import { Flex, Stack } from "@chakra-ui/react";
import Profile from "../Profile";
import Buttons from "../Buttons";
import Comments from "../Comments";
import ImgSlide from "../ImgSlide";
import PopupMessage from "../PopupMessage";
import Layout from "../../layout/layout";

function VendorReputaion() {
  return (
    <Layout>
      <Stack bg="rgb(245,244,244)">
        <Flex justifyContent="space-between" w="100%">
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

        <PopupMessage />
      </Stack>
    </Layout>
  );
}

export default VendorReputaion;
