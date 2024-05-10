import { Stack, Flex, Text} from "@chakra-ui/react";
import img from '../../../assets/images/rr.jpg'


function Profile() {
    return ( 
        <Stack >
            <Flex gap={5}>
        
            <img src={img} alt='' width={100} />

            

            <Stack spacing={2}>
                <Text fontSize={25}>Ramon Hassani</Text>
                <Flex gap={7} color='blue'>
                    <Text>Footwear</Text>
                    <Text>4.5</Text>
                </Flex>
                <Text fontSize={15}>Accessories, clothing for men</Text>
            </Stack>
            </Flex>

            <Text py={3} fontSize={15} fontWeight="bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, vero voluptates. Quasi, commodi dolores eveniet accusantium sunt quo. Consequatur, alias?</Text>

            <Stack marginBottom={10}>
                <Flex gap={10} textAlign='center' fontSize={20}>
                    <Text  bg='white' px='20px' py="10px" w='100px' borderRadius={20}>
                        500
                        <Text fontSize={10}>order completed </Text>
                    </Text>

                    <Text  bg='white' px='20px' py="10px" w='100px' borderRadius={20}>
                        54
                        <Text fontSize={10}>Zero-dispute Streak </Text>
                    </Text>

                    <Text  bg='white'  px='20px' py="10px" w='100px' borderRadius={20}>
                        100
                        <Text fontSize={10}>Top 100 vendor</Text>
                    </Text>
                </Flex>
            </Stack>

           <hr/>
            
        </Stack>
         
     );
}

export default Profile;