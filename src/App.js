import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
export function App(props) {
    const [c,setc]=useState(0);
    function handleclick(){
        setc(c+1);
    }
  return (
    <div className="App">
           <h1>{c}</h1>
            <Counter c={c} onClick={handleclick}/>
            <Counter c={c} onClick={handleclick}/>
        <button onClick={handleclick}>Inc</button>
        </div>
  );
}


function Counter(props){   
    const xy=function(){
        props.onClick();
    }
    return(
        <div>
        <button onClick={props.onClick}>Increase</button>
        </div>
    );
}

export default App;
