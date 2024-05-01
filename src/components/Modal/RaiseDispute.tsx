import { Stack, Text, Input, Button } from "@chakra-ui/react";
import { MdError } from "react-icons/md";
import DropdownInput from './DropdownInput';
import ImageUploader from './ImageUploader';

  

function RaiseDispute() {
    const options = ['Option 1', 'Option 2', 'Option 3'];

    const handleImageUpload = (file: File) => {
        // Implement your logic to handle the uploaded image
        console.log('Image uploaded:', file);
      };

  return (
    <Stack>
      <Text>Raise a dispute</Text>
      <Text fontSize="100px" py="30px" color="red">
        <MdError />
      </Text>
      <DropdownInput options={options} />
      <Input placeholder='Add discription'/>
      <ImageUploader onImageUpload={handleImageUpload} />

      <Stack alignItems="center" justifyContent="center" my="20px">
          <Button colorScheme="blue" size="sm" w="300px" p="10px">
            Submit dispute
          </Button>
        </Stack>
    </Stack>
  );
}

export default RaiseDispute;
