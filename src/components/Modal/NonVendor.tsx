import { Stack, Text, Flex, Card, CardBody, Button } from "@chakra-ui/react";
import { GoArrowLeft } from "react-icons/go";

const items = [
  {
    id: 1,
    image: "",
    product: "Iphone 14",
    price: "N1,230,000",
    description:
      "You can reach out to more customers. There is no limit to your  customer expansion",
  },
  {
    id: 2,
    image: "",
    product: "Iphone 14",
    price: "N1,230,000",
    description:
      "You can reach out to more customers. There is no limit to your  customer expansion",
  },
];

function NonVendor() {
  return (
    <Stack>
      <Flex p="30px" alignItems="center" gap="200px">
        <GoArrowLeft />
        <Text fontSize="25px" fontWeight="100px">
          Review payment details
        </Text>
      </Flex>

      <Stack border="0.5px solid black" m='20px' p='20px'>
        <Stack >
          <Text px="20px">Product details</Text>

          {items.map((item) => (
            <Card mx="40px">
              <CardBody>
                <Flex p="10px" justifyContent="space-between" gap="50px">
                  <>
                    <Text>
                      <p style={{ fontWeight: "bolder" }}>
                        {item.image}
                        {item.product}
                      </p>
                      <p style={{ fontSize: "10px" }}>{item.description}</p>
                    </Text>
                    <Text>{item.price}</Text>
                  </>
                </Flex>
              </CardBody>
            </Card>
          ))}
        </Stack>
        <hr />

        <Stack spacing={6} mx="30px" py="8">
          <Text>Vendor details</Text>
          <Flex justifyContent="space-between" gap="200px">
            <Text>Name:</Text>
            <Text>Infinity store</Text>
          </Flex>

          <Flex justifyContent="space-between" gap="200px">
            <Text>Email or phonenumber:</Text>
            <Text>infinity.store@gmail.com</Text>
          </Flex>
        </Stack>

        <hr />

        <Stack spacing={3} mx="30px" py="8">
          <Text py="10px">Transaction details</Text>
          <Flex justifyContent="space-between" gap="200px">
            <Text>Product amount</Text>
            <Text>N2,460,000</Text>
          </Flex>

          <Flex justifyContent="space-between" gap="200px">
            <Text>Fees</Text>
            <Text>N8,000</Text>
          </Flex>

          <Flex
            justifyContent="space-between"
            alignItems="center"
            gap="200px"
            py="20px"
          >
            <Text>Total amount to be paid</Text>
            <Text border="0.5px solid black" p="10px">
              N2,468,000
            </Text>
          </Flex>
        </Stack>
      </Stack>

      <Stack alignItems="center" justifyContent="center" my="20px">
          <Button colorScheme="blue" size="sm" w="300px" p="10px">
            Make payment
          </Button>
        </Stack>
    </Stack>
  );
}

export default NonVendor;
