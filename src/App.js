import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  const [color, setColor] = useState("Good");
  const[count, setCount] = useState(0);
  const[err, setError] = useState(false);
  
  const Find_race=() =>{
      setColor("a bad man");
  }
  const add = ()=>{
    if(count === 9){
      setError(true);
    }
    else if(count>12){
      setError(true);
    }
    else{
      setError(false)
    }
    setCount(count+1);
  }
  const Sub = ()=>{
    if(count!== 0){
      setCount(count-1);
      setError(false)
    }
    else{
      setError("Backoff cannot reduce more then zero");
    }
    
  }
  
  return (
    <div className="App">
      <Header />
      <div>{!err && <Body/>}</div>
      <h1 className="color">He is {color}</h1>

      <button onClick={Find_race}>Race</button>
      <button onClick={add}>add</button>
      <h1>count :{count}</h1>
      <button onClick={Sub}>substract</button>
      
      
    </div>
  );
}

export default App;

