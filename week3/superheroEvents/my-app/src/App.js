import './App.css';
import superheroData from './SuperheroData';
import Superhero from './SuperheroList'

function App() {
    const supers = superheroData.map(supe => <Superhero key ={supe.id} name={supe.name} show={supe.show} catchPhrase={supe.catchPhrase} image={supe.imageName} />)
  return (
  <div>
    {supers}
    {Superhero}
  </div>
  )
}

export default App;
