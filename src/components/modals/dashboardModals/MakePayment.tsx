/* eslint-disable @typescript-eslint/no-explicit-any */
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Input } from '@chakra-ui/react'


const MakePayment = ({isOpen, onClose}:any) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
    
    >
      <DrawerOverlay/>
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Make your Payment</DrawerHeader>

        <DrawerBody>
          <Input placeholder='Type here...' />
        </DrawerBody>

       
      </DrawerContent>
    </Drawer>
  )
}

export default MakePayment