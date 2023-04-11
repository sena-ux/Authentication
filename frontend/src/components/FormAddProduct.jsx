import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const FormAddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/product', {
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
        <h2 className='subtitle'>Add New Product</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                    <form onSubmit={saveProduct}>
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
                                <button type="submit" className='button is-success is-fullwidth'>Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
)
}

export default FormAddProduct