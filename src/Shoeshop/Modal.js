import React, { Component } from 'react'

export default class Modal extends Component {
  renderListShoes=()=>{
    const { shoesCartlist } = this.props;

    return shoesCartlist.map((product) => {
      return (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>
            <img src={product.image} width={50} alt="" />
          </td>
          <td>
            <button 
            class="btn btn-danger mr-1"
              onClick={() => {
                this.props.getProductUpdateQty(product.id, false);
              }}
            >
              -
            </button>
            {product.soLuong}
            <button
            class="btn btn-success ml-1"
              onClick={() => {
                this.props.getProductUpdateQty(product.id, true);
              }}
            >
              +
            </button>
          </td>
          <td>{product.price}</td>
          <td>{product.soLuong * product.price}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.getShoedelete(product.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    
    return (
        <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>{this.renderListShoes()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
