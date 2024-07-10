import logo from './logo.svg';
import './App.css';
import ClockHeading from './components/ClockHeading';
import ClockSlogan from './components/ClockSlogan';
import CurrenTime from './components/CurrenTime';

function App() {
  return (
    <center>
  <div>
    <ClockHeading/>
    <ClockSlogan/>
    <CurrenTime/>
  </div>
  </center>
  );
}

export default App;
