import Display from "./components/Display"
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";

function App() {
 return(
 <div className={styles.calculators} > 
 <Display></Display>
 <ButtonContainer></ButtonContainer>
 </div>
);
}

export default App;
