
import React, { useState } from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

interface DropdownInputProps {
  options: string[];
}

const DropdownInput: React.FC<DropdownInputProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <Menu>
      <MenuButton as={Button} w='fit-content' px='40px'>
        {selectedOption || 'Dispute category'}
      </MenuButton>
      <MenuList>
        {options.map((option, index) => (
          <MenuItem key={index} onClick={() => handleOptionSelect(option)}>
            {option}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DropdownInput;
