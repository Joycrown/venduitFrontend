import { GoArrowLeft } from "react-icons/go";
import {
  Input,
  Text,
  Stack,
  Box,
  Radio,
  RadioGroup,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { Card, CardBody} from "@chakra-ui/react";
import Img from "../../assets/icons/add_a_photo.png";
import Buttonn from './Proceed';

function MakePayment() {
  return (
    <Stack h="100%">
      <Flex p="30px" alignItems="center" gap="200px">
        <Box>
          <GoArrowLeft />
        </Box>

        <Box>
          <h1 style={{ fontSize: "25px", fontWeight: "500px" }}>
            Make a Payment
          </h1>
        </Box>
      </Flex>

      <Stack mx="50px" justifyContent="center" my="20px">
        <Text mb="2px" size="xs">
          Enter Vendor ID
        </Text>
        <Input htmlSize={15} width="auto" h="3.5rem" />


        <span>vendor not on verduit?</span>
        <Card maxW="xm" my="30px" size="xm" p="10px">
          <CardBody>
            <Text
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={Img} />
                <span>Ramon Footwears</span>
              </div>
              <Text color='blue'>4.5</Text>
            </Text>
          </CardBody>
        </Card>



        <Box bg="#ebedf0" px="30px" py="10px" borderRadius="15" w="fit-content">
          <Text fontSize={["sm", "", "", ""]}>Payment Type</Text>
        </Box>



        <RadioGroup defaultValue="1" my="25px">
          <Stack>
            <Stack>
              <Radio value="1">
                <div style={{ fontWeight: "bold" }}>Direct Payment</div>
              </Radio>
              <Text fontSize="xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat excepturi dolore reiciendis quas facilis voluptate esse!
                Nemo voluptatibus aliquam praesentium.
              </Text>
            </Stack>
            <Spacer />

            <Radio value="2">
              <div style={{ fontWeight: "bold" }}>Direct Payment</div>
            </Radio>
            <Text fontSize="xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              excepturi dolore reiciendis quas facilis voluptate esse! Nemo
              voluptatibus aliquam praesentium.
            </Text>
          </Stack>
        </RadioGroup>

        <Buttonn />


      </Stack>
    </Stack>
  );
}

export default MakePayment;
