import React, { Component } from 'react'
import Modal from './Modal';
import Shoeslist from './shoes-list';
import Describe from './Describe';
import data from './data.json';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state={
            listShoes:data,
            shoesdetail: null,
            shoesCartlist:[],

        };
    }
    findIndex = (maSP) => 
    this.state.shoesCartlist.findIndex((product) => product.id === maSP);
    
    handleRenderDetailShoes=(shoes)=>{
        this.setState({shoesdetail:shoes});
    }
    handleUpdateQty = (maSP, isPlus) => {
      const listCartClone = [...this.state.shoesCartlist];
      const index = this.findIndex(maSP);
      if (index !== -1) {
        if (isPlus) {
          // tang sl
          listCartClone[index].soLuong += 1;
        } else {
          // giam sl
          if (listCartClone[index].soLuong > 1) {
            listCartClone[index].soLuong -= 1;
          }
        }
        this.setState({
          shoesCartlist: listCartClone,
        });
      }
    };
    handleShoesCart=(shoes)=>{
      const shoesCart={
        id:shoes.id,
        name:shoes.name,
        image:shoes.image,
        price:shoes.price,
        soLuong: 1, 
      };
      const listCartClone=[...this.state.shoesCartlist];
      const index=this.findIndex(shoesCart.id);
       if (index !==-1){
        listCartClone[index].soLuong += 1;
       } else{
        listCartClone.push(shoesCart);
       }
       this.setState({
        shoesCartlist: listCartClone,
       });
    }

    handleGetShoedelete=(id)=>{
      const listCartFilter = this.state.shoesCartlist.filter(
        (product) => product.id !== id
      );
      this.setState({
        shoesCartlist: listCartFilter,
      });
    }
    totalQty = () => {
      return this.state.shoesCartlist.reduce(
        (total, product) => (total += product.soLuong),
        0
      );
    };
  render() {
    return (
        <div>
          <h3 className="title text-center">Shoes shop assignment</h3>
          <div className="container">
            <button
              className="btn btn-danger mb-3"
              data-toggle="modal"
              data-target="#modelId"
            >
              Giỏ hàng ({this.totalQty()})
            </button>
          </div>
          <Shoeslist
            
            listShoes={this.state.listShoes}
            getshoes={this.handleRenderDetailShoes}
            getshoesCart={this.handleShoesCart}
            
          />
          <Modal
            shoesCartlist={this.state.shoesCartlist}
            getShoedelete={this.handleGetShoedelete}
            getProductUpdateQty={this.handleUpdateQty}
          />
          <Describe
          detail={this.state.shoesdetail}
          />
        </div>
      );
  }
}
