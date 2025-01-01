import React from 'react';
import styles from './Add.module.css';
import Nav from '../Components/Nav';

function Add() {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <Nav />
            </div>

            <div className={styles.box}>
                <label htmlFor="PN">Product Name</label>
                <input id="PN" type="text" required placeholder="Enter Product Name" />
                <br />

                <label htmlFor="Im">Image</label>
                <input id="Im" type="file" />
                <br />

                <label htmlFor="Pr">Price</label>
                <input id="Pr" type="text" required placeholder="Enter Product Price" />
                <br />

                <label htmlFor="Ca">Category</label>
                <select id="Ca" name="Category" required>
                    <option value="" disabled selected>Select here</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Jewellery ">Jewellery</option>
                    <option value="Books">Books</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Other">Other</option>
                </select>
                <br />
                <button type="submit">Submit</button>
            </div>
        </div>
    );
}

export default Add;
