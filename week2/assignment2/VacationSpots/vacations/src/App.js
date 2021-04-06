import React from "react";
import './App.css';
import vacationSpots from "./VacayData";
import VacayCard from "./VacayCard";

function App() {
  const vacayComponents = vacationSpots.map(vacay => <VacayCard key={vacay.id} place={vacay.place} image={vacay.image} color={vacay.color} price={vacay.price} expensive={vacay.expensive} timeToGo={vacay.timeToGo} />)

  return (
    <div>
      {vacayComponents}
      
    </div>
  );
}
export default App;
