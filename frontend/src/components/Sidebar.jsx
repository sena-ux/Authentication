import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5"
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset } from '../features/authSlice';


const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { users } = useSelector((state) => state.auth);

    const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate("/");
    };



    return (
        <div>
            <aside className="menu pl-2 has-shadow mt-3">
                <p className="menu-label">
                    General
                </p>
                <ul className="menu-list">
                    <li><NavLink to={"/dashboard"}><IoHome />Dashboard</NavLink></li>
                    <li><NavLink to={"/product"}><IoPricetag />Products</NavLink></li>
                </ul>
                {users && users.role === "admin" && (
                    <div>
                        <p className="menu-label">
                            Admin
                        </p>

                        <ul className="menu-list">
                            <li><NavLink to={"/users"}><IoPerson />Users</NavLink></li>
                        </ul>
                    </div>
                )}

                <p className="menu-label">
                    Settings
                </p>
                <ul className="menu-list">
                    <li><button onClick={logout} className="button is-white"><IoLogOut />Logout</button></li>
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar