
import { FormControl, FormErrorMessage, Select } from "@chakra-ui/react";
import { Field, useField } from "formik";

const SelectField = ({ ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={!!meta.error && meta.touched}>
      <Field
        as={Select}
        {...field}
        {...props}
        bg="rgba(217, 217, 217, 0.21);
"
      ></Field>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
export default SelectField;