import React from "react";
import styles from "./Planet.module.scss";

const Planet = ({ planet, newFetch }) => {

  const deletePlanet = () => {
    fetch(`https://borneo-myplanet-api.herokuapp.com/planets/${planet.id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      newFetch();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className={styles.planet}>
      <p>{planet.id}</p>
      <p>{planet.name}</p>
      <p>{planet.hasKnownLife.toString()}</p>
      <p>{planet.type}</p>
      <p>{planet.noOfMoons}</p>
      <button onClick={() => deletePlanet()}>X</button>
    </div>
  );
};

export default Planet;
