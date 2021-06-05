import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" required></input>
        <label>Preperation Time</label>
        <input type="time" step="2" required></input>
        <label>Type</label>
        <select>
          <option>pizza</option>
          <option>soup</option>
          <option>sandwich</option>
        </select>
      </form>
    </div>
  );
};

export default Form;
