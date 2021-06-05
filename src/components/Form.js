import React from "react";

const Form = () => {
  const [dishes] = React.useState([
    {
      label: "Pizza",
      value: "Pizza",
      field: (
        <div>
          <label htmlFor="pizza">number of slices</label>
          <input type="number" />
          <label htmlFor="pizza">Diameter</label>
          <input type="number" />
        </div>
      ),
    },
    {
      label: "Soup",
      value: "Soup",
      field: (
        <div>
          <label htmlFor="soup">Spiciness scale</label>
          <input type="range" min="1" max="10" />
        </div>
      ),
    },
    {
      label: "Sandwich",
      value: "Sandwich",
      field: (
        <div>
          <label htmlFor="sandwich">Slices of bread</label>
          <input type="number" />
        </div>
      ),
    },
  ]);
  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" required></input>
        <label>Preperation Time</label>
        <input type="time" step="2" required></input>
        <label>Type</label>
        <select>
          {dishes.map((dish) => (
            <option key={dish.value} value={dish.value}>
              {dish.label}
            </option>
          ))}
        </select>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Form;
