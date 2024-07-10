 import  styles from"./Item.module.css";
 
 const Item = ({foodItem ,bought, handelBuyButton})=>{

 
   
   
  return <li className= {`${styles["Kg-item"]} list-group-item ${bought && "active"}`}>
    <span className={styles["Kg-span"]}>{foodItem}</span>
    <button className={`${styles.button} btn btn-info`}
    onClick ={handelBuyButton}>
      BUY
    </button>
    </li>
 };
 export default Item;