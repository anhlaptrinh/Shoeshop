import React, { Component } from 'react'

export default class Shoes extends Component {
  render() {
    const {name,price,image}=this.props.shoes;
    return (
      <div className="col-sm-4 mb-3">
        <div className="card">
          <img className="card-img-top" src={image} alt="" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{price}$</p>
            <button
              className="btn btn-success mr-5"
              data-toggle="modal"
              data-target="#modeldec"
              onClick={()=>{this.props.getshoes(this.props.shoes)}}
            >
              Chi tiết
            </button>
            <button className="btn btn-danger" onClick={()=>{this.props.getshoesCart(this.props.shoes);}}>Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
