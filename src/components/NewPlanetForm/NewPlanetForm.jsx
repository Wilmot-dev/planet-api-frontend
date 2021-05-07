import React, { useState } from "react";
import styles from "./NewPlanetForm.module.scss";

const NewPlanetForm = ({newFetch}) => {
  const [hasLife, setHasLife] = useState(false);
  const [name, setName] = useState();
  const [type, setType] =useState();
  const [noOfMoons, setNoOfMoons] = useState();

  const data = {
    name: name,
    hasKnownLife: hasLife,
    type: type,
    noOfMoons: parseInt(noOfMoons)
  };

  const submit = () => {
    fetch("https://borneo-myplanet-api.herokuapp.com/planets", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
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
    <section>
      <h3>Add A New Planet Here</h3>
      <p>name:</p>
      <input type="text" placeholder="name of your planet" onInput={e => setName(e.target.value)} />
      <p>hasknownLife:<input type="checkbox" onInput={() => setHasLife(!hasLife)} /></p>
      <p>type:</p>
      <input type="text" placeholder="what type is your planet?" onInput={e => setType(e.target.value)} />
      <p>noOfMoons:</p>
      <input type="number" onInput={e => setNoOfMoons(e.target.value)} />
      <button onClick={() => submit()}>Submit</button>
    </section>
  );
};

export default NewPlanetForm;
