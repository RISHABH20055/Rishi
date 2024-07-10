import Todoitem from "./Todoitem"; // Todoitem ko app.js mai use in krana par uska structure bootstrap yaha pe import kara hai
import styles from "./TodoItems.module.css"
 const TodoItems =({ todoItems }) => {
return (<div className ={styles.itemsContainer}>   
{ todoItems.map(item => <Todoitem todoDate={item.dueDate} todoName={item.name}></Todoitem>)}
  
  
   </div>);
 }
 export default TodoItems;