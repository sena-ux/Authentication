import React, { useEffect } from 'react';
import Layout from './Layout';
import Userlist from '../components/Userlist';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';


const User = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError, users} = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(()=>{
        if(isError){
            navigate("/");
        }
        if (users && users.role !== "admin") {
            navigate("/dashboard")
        }
    }, [isError, users, navigate]);


    
  return (
    <Layout>
        <Userlist />
    </Layout>
  )
}

export default User