import React from "react";
import { Text, Flex, Badge, Button, Input, Divider,Image,Box,Stack,Heading,Tag,TagLabel } from '@chakra-ui/react'
import { DeleteIcon, EditIcon} from '@chakra-ui/icons'
import React,{useState} from 'react'
const Product = () => {
 
  
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" />
      <Text data-cy="product-category"></Text>
      <Tag>
        <TagLabel data-cy="product-gender"></TagLabel>
      </Tag>
      <Heading data-cy="product-title"></Heading>
      <Box data-cy="product-price"></Box>
    </Stack>
  );
};

export default Product;
