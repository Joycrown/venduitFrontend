import { Stack, Flex, Text } from "@chakra-ui/react";
import img from "../../../assets/images/rr.jpg";
import Filter from "./Filter";

const comment = [
  {
    id: 1,
    image: "",
    name: "Shade Amu",
    title: "Amazing customer services",
    discription:
      "lorem sjendjen lkolll nkdkq elwfkowkk lorem chjehjfwejf lowejfjwj jajjaj jsjdnssd jsdjjdj sjdnjnjsjnsj sdjdnjdnjn djsnjdjsd sdjnjndj sjnjdnjk sefnjwjk wefjhwjn",
    date: "Feburary 22, 2024",
  },


  
];

function Comments() {
  return (
    <Stack>
      <Flex justifyContent="space-between" alignItems="center" my={10}>
        <Text fontWeight="bold">Reviews: 950</Text>
        <Filter/>
      </Flex>
      <Stack bg="white" p={5} borderRadius={30} spacing={3}>
        {comment.map((item) => (
          <>
            <Flex gap={5} alignItems="center">
              <img
                src={img}
                height="10px"
                width="35px"
                style={{ borderRadius: "50%" }}
              />
              <Text fontWeight="bold">{item.name}</Text>
            </Flex>
            <Text fontWeight="bold">{item.title}</Text>
            <Text fontSize={15}>{item.discription}</Text>

            <Flex justifyContent="space-between">
              <Flex gap={5}>
                <Text>Share</Text>
                <Text>Helpful</Text>
              </Flex>

              {item.date}
            </Flex>
          </>
        ))}
      </Stack>
    </Stack>
  );
}

export default Comments;
