import React,{useState, useEffect} from "react";
import "index.css";
function Timer() {
    const [timer, seTimer]= useState(1);
    
    useEffect(()=>{
      const intervalID= setInterval(()=>{
        setTimer(timer => timer+1);
      }, 1000)

      return()=>{
          clearInterval(intervalID);
      }
    }, [])

    return(
        <div lassName="Timer">
            <h1>Chrono : {timer}</h1>
        </div>
    )
    }
    export default Timer;