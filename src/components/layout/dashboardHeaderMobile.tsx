/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, IconButton, Image, HStack, Link} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import MainLogo from "../../assets/icons/logo main.svg"
export default function DashboardHeaderMobile({
  
  openSideNav,
}: any) {
  return (
    <Box
      h="50px"
      position="sticky"
      top="0px"
      display={{ base: "block", lg: "none" }}
      bgColor="#ffffff"
      zIndex="99"
      px="1rem"
    >
      <HStack justifyContent="space-between" h="100%">
        <Link href="/" >
          <Image src={MainLogo} boxSize="100px" />
        </Link>

        <IconButton
          aria-label=""
          icon={<GiHamburgerMenu color="#5D2FE0" size="1.5rem" />}
          bg="none"
          _focus={{ outline: "none" }}
          _hover={{ bg: "none" }}
          _active={{ bg: "none" }}
          onClick={openSideNav}
        />
      </HStack>
    </Box>
  );
}
