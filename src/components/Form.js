import React from "react";

const Form = () => {
  const [dishes] = React.useState([
    {
      label: "Pizza",
      value: "Pizza",
    },
    { label: "Soup", value: "Soup" },
    { label: "Sandwich", value: "Sandwich" },
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
          <option selected value="select">
            select
          </option>
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
