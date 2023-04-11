import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Productslist = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        const response = await axios.get('http://localhost:5000/product');
        setProduct(response.data);
    }


    const deleteProduct = async(productId) =>{
        await axios.delete(`http://localhost:5000/product/${productId}`);
        getProduct();
    }


    return (
        <div>
            <h1 className='title'>Products</h1>
            <h2 className='subtitle'>List of Products</h2>
            <Link to={"/product/add"} className='button is-primary mb-2'>Add New</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>product Name</th>
                        <th>Price</th>
                        <th>Created By</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((products, index) => (
                        <tr key={products.uuid}>
                            <td>{index + 1}</td>
                            <td>{products.name}</td>
                            <td>{products.price}</td>
                            <td>{products.user.name}</td>
                            <td>
                                <Link to={`/product/edit/${products.uuid}`} className='button is-info'>Edit</Link>
                                <button onClick={()=> deleteProduct(products.uuid)} className='button is-info is-danger ml-3'>Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Productslist