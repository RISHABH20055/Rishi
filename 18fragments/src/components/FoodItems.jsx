
import { useState } from "react";
import Item from "./Item";

const FoodItems =({items})=>{
      let [activeItems, setactiveItems] = useState([]) 

       let onBuyButton  =(event)=>{
        let newItems = [...activeItems,items];
        setactiveItems(newItems);
       }
  
    return(
        <ul className="list-group">
    {items.map((item) =>(<Item  Key ={item}
    foodItem={item}
     bought={activeItems.includes(item)} 
     handelBuyButton={(event)=>onBuyButton(item,event)}> </Item>) )}
 
  
</ul>
   

    );
 };
 export default FoodItems; 