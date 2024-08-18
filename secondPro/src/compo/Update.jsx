import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {
  const { id } = useParams();
  const [values, setValues] = useState({
    id:"",
    title: "",
    completed: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    
    axios.get(`http://localhost:3000/users/`+ id)

      .then(res => {
        setValues(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    // axios.put(`http://localhost:3000/users/${id}`, values)
    axios.put(`http://localhost:3000/users/`+id, values)

      .then(res => {
        console.log(res);
        navigate("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h1>Update</h1>
      <div>
        <form onSubmit={handleUpdate}>

        <label htmlFor="id">id</label>
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

          <button type="submit">Update</button>
        </form>
      </div>
    </>
  );
}

export default Update;
