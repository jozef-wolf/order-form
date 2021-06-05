import React from "react";

const Form = () => {
  const [dishes] = React.useState([
    {
      label: "Pizza",
      value: "Pizza",
      field: (
        <div>
          <label htmlFor="pizza">number of slices</label>
          <input type="number" required />
          <label htmlFor="pizza">Diameter</label>
          <input type="number" required />
        </div>
      ),
    },
    {
      label: "Soup",
      value: "Soup",
      field: (
        <div>
          <label htmlFor="soup">Spiciness scale</label>
          <input type="range" min="1" max="10" required />
        </div>
      ),
    },
    {
      label: "Sandwich",
      value: "Sandwich",
      field: (
        <div>
          <label htmlFor="sandwich">Slices of bread</label>
          <input type="number" required />
        </div>
      ),
    },
  ]);

  const [selectedDish, setSelectedDish] = React.useState(dishes[0]);

  const handleDishSelect = (e) => {
    const dish = dishes.find((dish) => dish.value === e.target.value);
    if (dish) {
      setSelectedDish(dish);
    }
  };

  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" required></input>
        <label>Preperation Time</label>
        <input type="time" step="2" required></input>
        <label>Type</label>
        <select onChange={handleDishSelect}>
          {dishes.map((dish) => (
            <option key={dish.value} value={dish.value} required>
              {dish.label}
            </option>
          ))}
        </select>
        {selectedDish && selectedDish.field}
        <button>submit</button>
      </form>
    </div>
  );
};

export default Form;
