import { Stack, Checkbox} from "@chakra-ui/react";

function CategoryList() {
    return ( 
        <Stack spacing={4} p={5}>
            <Checkbox >Clothing</Checkbox>
          <Checkbox >Skincare</Checkbox>
          <Checkbox >Accessories</Checkbox>
          <Checkbox >Footwear</Checkbox>
          <Checkbox >Gadget</Checkbox>
          <Checkbox >Gaming</Checkbox>
          <Checkbox >Household</Checkbox>
          <Checkbox >Pet</Checkbox>
          <Checkbox >Appliances</Checkbox>
        </Stack>
     );
}

export default CategoryList;