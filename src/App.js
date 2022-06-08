import "./App.css";
import { Clock, ClockClassComponent } from "./Clock/Clock";

function App() {

  function ActionLink(){

    function handleClick(e){
      e.preventDefault();
      console.log('lien cliqué.');
    }
  }
  return (
    <>
      {/*<Clock />*/}
      <ClockClassComponent />
    </>
  );
}

export default App;
