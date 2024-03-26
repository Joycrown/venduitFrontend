
import MainLogo from "../../assets/icons/logo main.svg"
import { Box, Image } from '@chakra-ui/react'

export default function LogoImage({ms, m}:{ms?:string, m:string}) {
  return (
    <Box display={["block", "block", "none"]}>
      <Image src={MainLogo} alt="logo" ms={ms} m={m} />
    </Box>
  );
}
