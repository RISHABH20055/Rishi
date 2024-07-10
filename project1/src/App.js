import AddTodo from "./components/AddTodo";
import Appname from "./components/Appname";
import Todoitem1 from "./components/Todoitem1";
import Todoitem from "./components/Todoitem1";
import Todoitem2 from "./components/Todoitem2";
import "./App.css";

function App() {
  return <center className ='todo-container'>
   <Appname/>
   <AddTodo/>
   <div className ='items-container'>
   <Todoitem1/>
  <Todoitem2/>
   </div>
  
   
  </center>
 
}

export default App;
