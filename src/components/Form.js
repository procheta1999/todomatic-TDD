import React, { useState } from "react";
const Form=(props)=>
{
    const [name, setName] = useState('');
    function handleChange(e) {
        setName(e.target.value);
      }
      
      
      function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
      }
    return(
        <form onSubmit={handleSubmit} data-testid="Form">
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg" data-testid="form-heading">
            What needs to be done?
          </label>
        </h2>
        <input
        type="text"
        id="new-todo-input"
        data-testid="form-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />

        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    )
}
export default Form;