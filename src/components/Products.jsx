import React, { useEffect } from "react";
import {Flex,Grid} from '@chakra-ui/icons'
import React,{useState} from 'react'
function handleEditClick(todo){
  setIsOpen(true)

  setModalValue(todo)
  console.log(todo)
}

function handleEditInputChange(e,id){ 
  setModalValue({ ...modalValue, text: e.target.value });
  }
  function handleEditSubmit(e){
    e.preventDefault();
    editTodo(modalValue.id,modalValue)
    setModalValue("")
    setIsOpen(false)
  }
  

const Products = (todos ) => {
  const [todo, setTodo] = useState(""); 

const [modalValue, setModalValue] = useState({})
useEffect(()=>{
  const getdata=async()=>{
    let response=await fetch("http://localhost:8080/products")
    let data=await response.json()
    console.log(data)
    setShowData(data)
  }
  getdata()
},[])
  return (
    <Flex>
    <DeleteIcon color="red.500" mr="2" onClick={()=>addTodo(todo.id)}/>
                <EditIcon onClick={()=>handleEditClick(todo)} />    
      <Grid>{/* List of Products */}</Grid>
      {/* Pagination */}
    </Flex>
    {showData.map((ele)=>{
      return <div key={showData.id}>
      <img src={ele.imageSrc}/>
      <div>{ele.title}</div>
      <div>{ele.category}</div>
      <div>{ele.gender}</div>
      </div>
     
      
    })}

  );
};

export default Products;
