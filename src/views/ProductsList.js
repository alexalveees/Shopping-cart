import React, { Component } from 'react';
import { Products } from '../api/Products';
import { ProductItens } from '../components/ProductItens';

import './Products.css'

export class ProductsList extends Component {
  state = {
    products: []
  }

  async componentDidMount () {
    const { itens } = await Products.getProducts()
    this.setState({ products: itens })
  }

  render () {
    return (
      <ul className="products-list">
          {this.state.products.map(props => (
            <ProductItens product= { props }/>
          ))}
      </ul>
    )
  }
} 

