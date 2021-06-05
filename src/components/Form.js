import React, { useState } from "react";

const Form = () => {
  const [dishes] = React.useState([
    { label: "Pizza", value: "Pizza" },
    { label: "Soup", value: "Soup" },
    { label: "Sandwich", value: "Sandwich" },
  ]);

  const [name, setName] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [type, setType] = useState("");
  const [pizzaSlices, setPizzaSlices] = useState("");
  const [diameter, setdiameter] = useState("");
  const [spiciness, setSpiciness] = useState("");
  const [breadSlices, setbreadSlices] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <label>Preparation Time</label>
        <input
          type="time"
          step="2"
          value={preparationTime}
          onChange={(e) => setPreparationTime(e.target.value)}
          required
        ></input>
        <label>Type</label>
        <select onChange={(e) => setType(e.target.value)}>
          <option defaultValue>select dish</option>
          {dishes.map((dish) => (
            <option key={dish.value} value={type}>
              {dish.label}
            </option>
          ))}
        </select>
        {type === "Pizza" && (
          <>
            <label>Number of slices</label>
            <input type="number" required></input>
          </>
        )}
        {type === "Soup" && (
          <>
            <label>Spiciness</label>
            <input type="number" min="1" max="10" required></input>
          </>
        )}
        {type === "Sandwich" && (
          <>
            <label>Slices of bread</label>
            <input type="number" min="1" required></input>
          </>
        )}
        <button>submit</button>
      </form>
    </div>
  );
};

export default Form;
