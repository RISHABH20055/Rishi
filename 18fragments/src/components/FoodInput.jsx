import  styles from "./FoodInput.module.css";

const FoodInput =({handleKeyDown})=>{






return(
    <input type="text" placeholder="Enter youe food item here"
     className={styles.FoodInput}
      onKeyDown={ handleKeyDown}></input>
);
};
export default FoodInput;