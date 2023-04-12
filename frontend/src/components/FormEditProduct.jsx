import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const FormEditProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(()=>{
        const getProductById = async()=>{
            try {
                const response = await axios.get(`http://localhost:5000/product/edit/${id}`);
                setName(response.data.name);
                setPrice(response.data.price);
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        }
        getProductById();
    }, [id])

    const updateProduct = async(e) =>{
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/product/${id}`, {
                name: name,
                price: price
            });
            navigate("/product")
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }



    return (
        <div>
            <h1 className='title'>Product</h1>
            <h2 className='subtitle'>Edit Product</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={updateProduct}>
                            <p className='has-text-centered'>{msg}</p>
                            <div className="field">
                                <label className='label'>Name</label>
                                <div className="control">
                                    <input type="text" name="nama" id="" value={name} onChange={(e) => setName(e.target.value)} className='input' placeholder='Product Name' />
                                </div>
                            </div>
                            <div className="field">
                                <label className='label'>Price</label>
                                <div className="control">
                                    <input type="number" name="price" id="" value={price} onChange={(e) => setPrice(e.target.value)} className='input' placeholder='Price' />
                                </div>
                            </div>
                            <div className="field mt-5">
                                <div className="control">
                                    <button type="submit" className='button is-success is-fullwidth'>Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormEditProduct