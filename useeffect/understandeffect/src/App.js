import React,{useEffect} from 'react';
import './App.css';
import MyComponent from './Componenty';

function App() {
  useEffect(()=>{
    console.log("App Comp, is mounting");
  },[]);

  return (
    <div className="App">
      <MyComponent/>
    </div>    
  );
}
export default App;
