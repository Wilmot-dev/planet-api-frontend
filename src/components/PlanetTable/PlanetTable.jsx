import React from "react";
import Planet from "../Planet";
import styles from "./PlanetTable.module.scss";

const PlanetTable = ({ planets, newFetch }) => {
  const headingjsx = (
    <div className={styles.heading}>
      <p>ID</p>
      <p>Name</p>
      <p>Has Known Life</p>
      <p>Type</p>
      <p>Number of Moons</p>
      <p>X</p>
    </div>
  );

  const planetsJSX = planets.map(planet => (<Planet planet={planet} key={planet.id} newFetch={newFetch} />));
  return (
    <>
    <div className={styles.table}>
      {headingjsx}
      {planetsJSX}
    </div>
    </>
  );
};

export default PlanetTable;
