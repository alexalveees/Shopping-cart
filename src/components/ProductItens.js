import React from "react";
import {Link} from "react-router-dom";

export const ProductItens = ({ product }) => ( 
  <li className="product-iten">
    <img src={require(`../assets/imagens/${product.image}`)} alt={product.name}/>
    <h3>{product.name}</h3>
    <span className="product-price">
      <b>{product.price}</b>
    </span>

    <p><Link to={`/product/${product.id}`}>Details</Link></p>
  </li>
)