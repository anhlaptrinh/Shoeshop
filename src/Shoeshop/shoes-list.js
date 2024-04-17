import React, { Component } from 'react'
import Shoes from './Shoes';
export default class Shoeslist extends Component {
    renderShoes=()=>{
        const {listShoes, getshoes, getshoesCart}=this.props;
        return listShoes.map((item) => {
            return (<Shoes
                key={item.id}
                shoes={item}
                getshoes={getshoes}
                getshoesCart={getshoesCart}
            />);
        });
    }
  render() {
    return (
      <div className="container">
        <div className="row">
            {this.renderShoes()}
        </div>
      </div>
    );
  }
}
