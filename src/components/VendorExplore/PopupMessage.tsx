import { useEffect } from "react";
import { Button,Stack, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter,Flex, ModalBody, ModalCloseButton, Text } from "@chakra-ui/react";

const PopupMessage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const timer = setTimeout(() => {
      onOpen();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onOpen]);

  return (
    <>
    <Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={4}>
            <Text textAlign="center" marginBottom="40px" color="blue" mt={3}>Important Notice!</Text>
          <ModalHeader textAlign="center">Always pay with Verduit</ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize={15}>
            <Text marginBottom={5}>
            No matter the rating of a vendor, always ensure you make payment on Venduit. We can only guarantee refunds of escrow transactions carried out on the platform. You can also make direct transactions if you’re comfortable doing so. 
            </Text>
            <Text>Finally don’t forget to leave a rating and genuine review of your experience after every transaction, it helps make our community safer.</Text>
          </ModalBody>

          <ModalFooter>
            <Flex justifyContent='center' alignItems='center'>
            <Button colorScheme="blue" mr={36} onClick={onClose}>
              I Understand
            </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Stack>
    </>
  );
};

export default PopupMessage;
