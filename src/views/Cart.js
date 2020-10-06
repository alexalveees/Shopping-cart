import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions'

class CartComponent extends Component{
  render() {
    return (
      <div>
        <ul>
          {this.props.products.map(product => (
            <li>
              <img src={require(`../assets/imagens/${product.image}`)} alt={product.name}/>
              <h4>{product.name}</h4>
              <span>{product.price}</span>
              <button onClick={() => this.props.removeFromCart(product)}>Remove from cart</button>
            </li>
          ))}
        </ul>
        <p>
          <b>Amount:</b> {this.props.products.reduce((acc, product) => acc + product.price, 0).toFixed(2)}
        </p>
      </div>
    )
  }
}

const mapStateToProps = ({ cart }) => ({
  products: cart.products
})


export const Cart = connect(
  mapStateToProps,
  { removeFromCart }
)(CartComponent)