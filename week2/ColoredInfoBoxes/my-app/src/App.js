import React from "react";
import './App.css';
import Child from './Child.js';

function App() {
  return (
    <div>
      <Child name="Jamie" color="red" birth="first" year="09" />
      <Child name="Gerald" color="blue" birth="second" year="09" />
      <Child name="Bruh" color="black" birth="third" year="26" />
      <Child name="Aliyah" color="pink" birth="fourth" year="29" />
      <Child name="Shaunelle" color="violet" birth="fifth" year="37" />
      <Child name="Evianna" color="purple" birth="sixth" year="38" />
      <Child name="Larry" color="turqouise" birth="seventh" year="40" />
      <Child name="Alyssa" color="green" birth="eighth" year="41" />
      <Child name="Marva" color="yellow" birth="ninth" year="43" />
      <Child name="Ryan" color="gray" birth="tenth" year="45" />   
    </div>
  );
}

export default App;
