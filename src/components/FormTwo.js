import React, { useState } from "react";

const FormTwo = () => {
  const [dishes] = React.useState([
    {
      label: "Pizza",
      value: "Pizza",
    },
    { label: "Soup", value: "Soup" },
    { label: "Sandwich", value: "Sandwich" },
  ]);
  const [name, setName] = useState("");
  const [type, setType] = useState([]);
  const [preparationTime, setPreparationTime] = useState("");
  const [pizzaSlices, setPizzaSlices] = useState("");
  const [diameter, setdiameter] = useState("");
  const [spiciness, setSpiciness] = useState("");
  const [breadSlices, setbreadSlices] = useState("");
  const handleChange = (value) => {
    setType(value);
  };
  return (
    <div>
      <form>
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
        <select onChange={(e) => handleChange(e.target.value)}>
          <option defaultValue>select dish</option>
          {dishes.map((dish) => (
            <option key={dish.value} value={dish.value}>
              {dish.label}
            </option>
          ))}
        </select>
        {type === "Pizza" && (
          <>
            <label>Number of slices</label>
            <input
              type="number"
              value={pizzaSlices}
              onChange={(e) => setPizzaSlices(e.target.value)}
              required
            ></input>
            <label>Diameter</label>
            <input
              type="number"
              step="0.01"
              value={diameter}
              onChange={(e) => setdiameter(e.target.value)}
              required
            ></input>
          </>
        )}
        {type === "Soup" && (
          <>
            <label>Spiciness</label>
            <input
              type="number"
              min="1"
              max="10"
              value={spiciness}
              onChange={(e) => setSpiciness(e.target.value)}
              required
            ></input>
          </>
        )}
        {type === "Sandwich" && (
          <>
            <label>Slices of bread</label>
            <input
              type="number"
              min="1"
              value={breadSlices}
              onChange={(e) => setbreadSlices(e.target.value)}
              required
            ></input>
          </>
        )}

        <button>submit</button>
      </form>
    </div>
  );
};

export default FormTwo;
