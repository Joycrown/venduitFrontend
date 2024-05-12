import React, { useState, useRef } from "react";
import { Stack, Text, Flex, IconButton, Image } from "@chakra-ui/react";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";

function TopCat() {
  const categoryContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (categoryContainerRef.current) {
      categoryContainerRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (categoryContainerRef.current) {
      categoryContainerRef.current.scrollLeft += 200;
    }
  };

  return (
    <Stack>
      <Flex justifyContent="space-between" alignItems="center" w="100%">
        <Text fontWeight="bold">Top categories</Text>
        <Flex>
          <IconButton
            aria-label="Scroll Left"
            icon={<FaRegArrowAltCircleLeft />}
            onClick={scrollLeft}
            color="blue.500"
            _hover={{ color: "blue.600" }}
            borderRadius="50%"
          />
          <IconButton
            aria-label="Scroll Right"
            icon={<FaRegArrowAltCircleRight />}
            onClick={scrollRight}
            color="blue.500"
            _hover={{ color: "blue.600" }}
            borderRadius="50%"
          />
        </Flex>
      </Flex>
      <div
        id="categoryContainer"
        ref={categoryContainerRef}
        style={{
          overflowX: "hidden",
          whiteSpace: "nowrap",
          width: "100%",
          display: "flex",
        }}
      >
        <Image
          src="https://via.placeholder.com/200x200.png?text=Category+1"
          alt="Category 1"
          mr={4}
        />
        <Image
          src="https://via.placeholder.com/200x200.png?text=Category+2"
          alt="Category 2"
          mr={4}
        />
        <Image
          src="https://via.placeholder.com/200x200.png?text=Category+3"
          alt="Category 3"
          mr={4}
        />
        <Image
          src="https://via.placeholder.com/200x200.png?text=Category+4"
          alt="Category 4"
          mr={4}
        />
        <Image
          src="https://via.placeholder.com/200x200.png?text=Category+5"
          alt="Category 5"
          mr={4}
        />
        <Image
          src="https://via.placeholder.com/200x200.png?text=Category+6"
          alt="Category 6"
          mr={4}
        />
        <Image
          src="https://via.placeholder.com/200x200.png?text=Category+7"
          alt="Category 7"
          mr={4}
        />
        <Image
          src="https://via.placeholder.com/200x200.png?text=Category+8"
          alt="Category 8"
          mr={4}
        />
      </div>
    </Stack>
  );
}

export default TopCat;
