import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    const [data, setData] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3000/users')
            .then(res => setData(res.data))
            .catch(err => console.log(err));

    }, [])

    const handleDelete = (id) => {
        const confirm = window.confirm("would u lke to delte ");
        if (confirm) {
            axios.delete('http://localhost:3000/users/' + id)
                .then(res => {
                    location.reload();
                }).catch(err => console.log(err));

        }
    }
    return (
        <>
            <div>
                <h1>List Of users </h1>
                <div>
                    <Link to="/create">Add +</Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID </th>
                            <th>Title </th>
                            <th>status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, i) => (
                                <tr key={i}>
                                    <td>{d.id}</td>
                                    <td>{d.title}</td>
                                    <td>{d.completed}</td>
                                    <td>
                                        <Link to={`/update/${d.id}`}>Edit </Link>
                                        {/* <Link to={`/update/${d.id}`}>Edit </Link>  */}
                                        <button onClick={e => handleDelete(d.id)}>delete</button>

                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>


            </div>


        </>
    )


}

export default Home