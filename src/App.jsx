import { useEffect, useState } from 'react';
import './App.scss';
import PlanetTable from './components/PlanetTable';
import NewPlanetForm from './components/NewPlanetForm';
import styles from './App.scss';

function App() {
  const [planets, setPlanets] = useState([]);

  const newFetch = () => {
    fetch("https://borneo-myplanet-api.herokuapp.com/planets")
      .then(response => response.json())
      .then(data => setPlanets(data));
  };

  useEffect(() => {
    newFetch();
  }, [])

  // useEffect(() => {
  //   fetch("https://borneo-myplanet-api.herokuapp.com/planets")
  //     .then(response => response.json())
  //     .then(data => setPlanets(data));
  // }, [setPlanets])

  const planetJSX = planets.map(planet => (<p>{planet.name}</p>));

  return (
  <div className="app">
    <h1>Welcome to Planet API</h1>
    <p>Here you can get all the random planet knowledge you want. Well only the knowledge we have but same thing.</p>
    {console.log(planets)}
    {/* {planetJSX} */}
    <PlanetTable planets={planets} newFetch={newFetch} />
    <NewPlanetForm newFetch={newFetch} />
  </div>

  );
}

export default App;
