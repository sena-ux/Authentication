import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const FormAddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [gambar, setGambar] = useState("");
    const [description, setDescription] = useState("");
    const [preview, setPreview] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();


    const loadImage = (e) => {
        const gambar = e.target.files[0];
        setGambar(gambar);
        setPreview(URL.createObjectURL(gambar));
    };


    const saveProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("gambar", gambar);
        formData.append("name", name);
        try {
            await axios.post('http://localhost:5000/product', formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                    name: name,
                    price: price,
                    gambar: gambar,
                    description: description
                },
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
                                <label className='label'>Harga</label>
                                <div className="control">
                                    <input type="number" name="price" id="" value={price} onChange={(e) => setPrice(e.target.value)} className='input' placeholder='Price' />
                                </div>
                            </div>
                            <div className="field">
                                <label className='label'>Product</label>
                                <div className="control">
                                    <input type="file" name="gambar" id="" onChange={loadImage} className='input' placeholder='Price' />
                                </div>
                            </div>

                            {preview ? (
                                <figure className="image is-128x128">
                                    <img src={preview} alt="Preview gambar product" />
                                </figure>
                            ) : (
                                ""
                            )}

                            <div className="field">
                                <label className='label'>Description</label>
                                <div className="control">
                                    <input type="text" name="description" id="" value={description} onChange={(e) => setDescription(e.target.value)} className='input' placeholder='Price' />
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