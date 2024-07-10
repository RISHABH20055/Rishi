import AddTodo from "./components/AddTodo";
import Appname from "./components/Appname";



import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {

   const todoItems =[{
  name:'Buy Milk',
  dueDate:'4/10/2023'
   },{
    name:'GO TO COLLEGE',
    dueDate:'4/10/2023'

   },{
    name:'GO TO home',
    dueDate:'4/10/2023'
   }
  ];

   
  return <center className ='todo-container'>
   <Appname/>
   <AddTodo/>
   <TodoItems todoItems={todoItems}></TodoItems>
   
  
   
  </center>
 
}

export default App;
