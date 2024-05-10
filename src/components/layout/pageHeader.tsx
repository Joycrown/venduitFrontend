/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, HStack, Icon, Text } from '@chakra-ui/react';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosNotificationsOutline } from 'react-icons/io';

const PageHeader = (heading:any) => {
  return (
    <Box>
      <HStack justifyContent="space-between">
        <Text
          color="#123190BF"
          fontWeight="bold"
          fontSize={{ base: "lg", lg: "2xl" }}
        >
          {heading}
        </Text>
        <Box
          borderRadius="50%"
          bgGradient="linear-gradient(190.57deg, rgba(255, 255, 255, 0.56) 19.25%, rgba(248, 248, 255, 0.71) 54.39%, rgba(255, 255, 255, 0.59) 90.02%);"
          p={{ base: "4", lg: "5" }}
          position="relative"
          // shadow="10px 48.5967px 140px rgba(126, 123, 160, 0.2)"
        >
          <Icon
            as={IoIosNotificationsOutline}
            boxSize={{ base: "4", lg: "6" }}
          ></Icon>
          <Icon
            as={GoPrimitiveDot}
            boxSize={{ base: "4", lg: "5" }}
            color="#2DCED6"
            position="absolute"
            top="0.5rem"
            pr={2}
          ></Icon>
        </Box>
      </HStack>
    </Box>
  );
}

export default PageHeader