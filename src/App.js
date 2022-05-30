import React, { useState } from "react";
import {Stack,Text } from "@chakra-ui/react"
import Products from "./components/Products";
import Product from "./components/Product";

const App = () => {
  
  const[todos,settodos]=useState(todolist)
  return <div>
    
    <Stack p={5}>

    <Text bgGradient="linear(to-l, #7928CA,#FF0080)"
      bgClip="text"
      fontSize="6xl"
      fontWeight="extrabold">
     
    </Text>

    <TodoList todos={todos} addTodo={deleteTodo} editTodo={editTodo}/>
    <AddTodo addTodo={addTodo}/>
    </Stack>

  </div>;
};

export default App;
