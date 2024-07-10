import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/container';
import FoodInput from './components/FoodInput';



function App() {
 
 
 
 let [foodItems, setfoodItems]=  useState([
  'A','B','C'
 ]);

 const onKeyDown =(event)=>{
  if(event.key ==="Enter"){
    let newFoodItem = event.target.value;
    event.target.value ="";
    let newItems =[...foodItems,newFoodItem]
    setfoodItems(newItems)
    console.log('food value enterd is'+ newFoodItem)
  }
 
 };
      
  
  return (
    <>
  <Container>
     <h1 className='food-heading'> Healthy-Food!!</h1>
   
  
  <FoodInput handleKeyDown={onKeyDown}></FoodInput>
  <ErrorMessage items ={foodItems}></ErrorMessage>
 <FoodItems items ={foodItems}></FoodItems>
 </Container>
{/*
 < Container>
  <p>ABOVE IS THE LIST OF HEalty food</p>
 </Container > */}
   </>
  
    
  );
}



export default App;
 