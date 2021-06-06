import React, { useState } from "react";
import styled from "styled-components";
import pizza from "./imgs/pizza.jpg";
import soup from "./imgs/soup.jpg";
import sandwich from "./imgs/sandwich.jpg";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  padding: 10px 0 10px 0;
  margin: 5% 0 10% 0;
  background-color: white;
  h2 {
    font-size: 2rem;
    letter-spacing: 20px;
  }
  img {
    width: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f6f6f6;
      width: 50vw;
      height: 40px;
    }
    input {
      text-align: left;
      margin: 5px;
      border: 1px solid lightgray;
      height: 20px;
      width: 150px;
    }
    select {
      border: none;
      width: 150px;
      height: 20px;
      margin: 10px;
    }
  }
  button {
    height: 30px;
    background-color: black;
    color: white;
    border: 1px solid black;
    &:hover {
      opacity: 75%;
    }
  }
`;

const Form = () => {
  const [items] = React.useState([
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const dish = {
      name,
      type,
      preparationTime,
      pizzaSlices,
      diameter,
      spiciness,
      breadSlices,
    };
    console.log(dish);

    fetch("https://frosty-wood-6558.getsandbox.com:443/dishes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dish),
    }).then(() => {
      console.log("new dish added");
    });
  };

  return (
    <StyledDiv>
      <h2>Dish</h2>
      {type === "Pizza" && (
        <>
          <img src={pizza} alt=""></img>
        </>
      )}
      {type === "Soup" && (
        <>
          <img src={soup} alt=""></img>
        </>
      )}
      {type === "Sandwich" && (
        <>
          <img src={sandwich} alt=""></img>
        </>
      )}
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
        <select onChange={(e) => handleChange(e.target.value)}>
          <option defaultValue>select dish</option>
          {items.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
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
              step="0.1"
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

        <button>Submit</button>
      </form>
    </StyledDiv>
  );
};

export default Form;
