import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';


const Userlist = () => {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
    }


    const deleteUsers = async(usersId) => {
        const result = prompt('Yakin hapus data!!!');
        if (result) {
            await axios.delete(`http://localhost:5000/users/${usersId}`);
            getUsers();
        } else {
            navigate("/users");
        }
    };



    return (
        <div>
            <h1 className='title'>User</h1>
            <h2 className='subtitle'>List of Users</h2>
            <Link to={"/users/add"} className='button is-primary mb-2'>Add New</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.uuid}>
                            <td>{index +1}</td>
                            <td>{user.nama}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                            <Link to={`/users/edit/${user.uuid}`} className='button is-info'>Edit</Link>
                                <button onClick={() => deleteUsers(user.uuid)} className='button is-info is-danger ml-3'>Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Userlist