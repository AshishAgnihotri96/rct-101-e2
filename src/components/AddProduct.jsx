import React from "react";
import {Button,Modal,ModalBody, Input,Select,useToast,RadioGroup,Radio } from '@chakra-ui/react'
import React, {useState} from 'react'
import { nanoid } from 'nanoid';


const AddProduct = () => {
  const toast = useToast()
  const [value, setValue] = useState("")
  function handleSubmit(e){
    e.preventDefault();

if(value === ''){
    toast({
        title: "Please enter the text.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      })
      return;
    }
const todo = {
    id: nanoid(),
    text: value
}

addTodo(todo)
setValue('')

}
  return (
    <>
      
      <Button my={4} data-cy="add-product-button"></Button>
      <Modal>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt"></option>
            <option data-cy="add-product-category-pant"></option>
            <option data-cy="add-product-category-jeans"></option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male"></Radio>
            <Radio data-cy="add-product-gender-female"></Radio>
            <Radio data-cy="add-product-gender-unisex"></Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button  onClick={(e)=>setValue(e.target.value)}  data-cy="add-product-submit-button"></Button>
        </ModalBody>
      </Modal>
      <form onSubmit={handleSubmit}>
        <Stack spacing={5}>
            <Input
            mt={5} 
            value={value} 
            variant="outline" 
            type="text" 
            placeholder="Enter your todo..."
            />
           
        </Stack>
        </form>
    </>
    
  );
};

export default AddProduct;
