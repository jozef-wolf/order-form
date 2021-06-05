import React, { useState } from "react";

const Form = () => {
  const [dishes] = React.useState([
    { label: "Pizza", value: "Pizza" },
    { label: "Soup", value: "Soup" },
    { label: "Sandwich", value: "Sandwich" },
  ]);

  const [type, setType] = useState([]);

  const handleChang = (value) => {
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
        <select onChange={(e) => handleChang(e.target.value)}>
          <option disabled selected value>
            select dish
          </option>
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
