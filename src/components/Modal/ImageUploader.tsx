// ImageUploader.tsx
import React, { useState } from 'react';
import { Box, Button, Input, Text, Image } from '@chakra-ui/react';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
}

const dummyImageUrl = 'https://via.placeholder.com/200';

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewURL(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = () => {
    if (selectedImage) {
      onImageUpload(selectedImage);
      setSelectedImage(null);
      setPreviewURL(null);
    }
  };

  return (
    <Box>
      <Input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        display="none"
        id="image-upload-input"
      />
      <label htmlFor="image-upload-input">
        <Button as="span" colorScheme="blue" mr={2}>
          Choose Image
        </Button>
      </label>
      {selectedImage && (
        <Text fontSize="sm" mb={2}>
          Selected Image: {selectedImage.name}
        </Text>
      )}
      {selectedImage ? (
        <Image src={previewURL || dummyImageUrl} alt="Preview" maxW="200px" mb={2} />
      ) : (
        <Image src={dummyImageUrl} alt="Dummy Image" maxW="200px" mb={2} />
      )}
      <Button onClick={handleImageUpload} disabled={!selectedImage}>
        Upload Image
      </Button>
    </Box>
  );
};

export default ImageUploader;
