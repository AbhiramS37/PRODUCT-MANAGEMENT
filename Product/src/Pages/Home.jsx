import React, { useState, useEffect } from "react";
import ProductTable from "../Components/ProductTable";
import Nav from '../Components/Nav';

const HomePage = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <Nav />
            <div style={{ padding: "20px" }}>
                <h1 style={{ fontSize: "30px", fontWeight: "bolder", textAlign: "center", textShadow: "5px 5px 7px grey" }}>PRODUCT DASHBOARD</h1>
                <ProductTable products={products} />
            </div>
        </div>
    );
};

export default HomePage;
