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

  const [type, setType] = useState([]);

  const handleChange = (value) => {
    setType(value);
  };
  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" required></input>
        <label>Preparation Time</label>
        <input type="time" step="2" required></input>
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
            <input type="number" required></input>
            <label>Diameter</label>
            <input type="number" step="0.01" required></input>
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

export default FormTwo;
