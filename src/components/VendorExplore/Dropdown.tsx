import React, { useState } from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem, Flex, Text, Stack } from '@chakra-ui/react';

interface DropdownInputProps {
  options: string[];
}

const DropdownInput: React.FC<DropdownInputProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <>
    <Stack spacing={5 }>
      <Menu>
        <MenuButton as={Button} w='fit-content' px='40px'>
          {selectedOption || 'category'}
        </MenuButton>
        <MenuList>
          {options.map((option, index) => (
            <MenuItem key={index} onClick={() => handleOptionSelect(option)}>
              {option}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton as={Button} w='fit-content' px='40px'>
          {selectedOption || 'rating'}
        </MenuButton>
        <MenuList>
          {options.map((option, index) => (
            <MenuItem key={index} onClick={() => handleOptionSelect(option)}>
              {option}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>


<Text>Location</Text>
<Flex gap={3}>
      <Menu>
        <MenuButton as={Button} w='fit-content' px='40px'>
          {selectedOption || 'Country'}
        </MenuButton>
        <MenuList>
          {options.map((option, index) => (
            <MenuItem key={index} onClick={() => handleOptionSelect(option)}>
              {option}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton as={Button} w='fit-content' px='40px'>
          {selectedOption || 'State/city'}
        </MenuButton>
        <MenuList>
          {options.map((option, index) => (
            <MenuItem key={index} onClick={() => handleOptionSelect(option)}>
              {option}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      </Flex>
      </Stack>
    </>
  );
};

export default DropdownInput;
