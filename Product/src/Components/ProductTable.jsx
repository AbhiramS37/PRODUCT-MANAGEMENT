import React from 'react';

function ProductTable({ products }) {
    return (
        <table border="3" style={{ width: '100%', textAlign: 'left', marginTop: '20px' }}>
            <thead>
                <tr>
                    <th style={{ fontSize: "20px", fontWeight: "bolder" }}>TITLE</th>
                    <th style={{ width: "250px", fontSize: "20px", fontWeight: "bolder" }}>PRICE</th>
                    <th style={{ width: "250px", fontSize: "20px", fontWeight: "bolder" }}>CATEGORY</th>
                    <th style={{ fontSize: "20px", fontWeight: "bolder" }}>IMAGE</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <tr key={index}>
                        <td>{product.title}</td>
                        <td style={{ textAlign: "center" }}>${product.price}</td>
                        <td style={{ textAlign: "center" }}>{product.category}</td>
                        <td style={{ textAlign: "center" }}>
                            <img src={product.image} alt={product.title} style={{ width: '80px', height: '80px' }} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductTable;
