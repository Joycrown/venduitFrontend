import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react"
import { Field, useField } from "formik"




const TextField = ({ ...props }: any) => {
  const [field, meta] = useField(props)
  return (
    <FormControl isInvalid={!!meta.error && meta.touched}>
      <Field
        as={Input}
        // mt={8}

        {...field}
        {...props}
        bg="rgba(217, 217, 217, 0.21);
"
        // variant="filled"
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}
export default TextField