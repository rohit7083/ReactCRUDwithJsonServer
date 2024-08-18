import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create() {
  const [values, setValues] = useState({
    id:"",
    title: "",
    completed: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/users/', values)
      .then(res => {
        console.log(res);
        navigate("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Create</h1>

      <form onSubmit={handleSubmit}>
      <label htmlFor="title">id</label>
        <input
          type="text"
          name="id"
          placeholder="Enter your id"
          value={values.id}
          onChange={handleChange}
        /><br />

        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter your title"
          value={values.title}
          onChange={handleChange}
        /><br />

        <label htmlFor="completed">Completed</label>
        <input
          type="text"
          name="completed"
          placeholder="Enter your status"
          value={values.completed}
          onChange={handleChange}
        /><br />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Create;

