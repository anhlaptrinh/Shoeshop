import React, { Component } from 'react'

export default class Describe extends Component {
  render() {
    const {detail}=this.props;
    return (
      <div
        className="modal fade"
        id="modeldec"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px", background: "White" }}
          role="document"
        >
          <div className="row">
            <div className="col-sm-5">
              <img
                className="img-fluid"
                src={detail?.image}
                alt=""
              />
            </div>
            <div className="col-sm-7">
              <div className="modal-header text-center">
                <h5 className="modal-title">Mô Tả</h5>
              </div>
              <div className="modal-body">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{detail?.name}</td>
                  </tr>
                  <tr>
                    <td>Alias</td>
                    <td>{detail?.alias}</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>{detail?.price}</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>{detail?.description}</td>
                  </tr>
                  <tr>
                    <td>ShortDescription</td>
                    <td>{detail?.shortDescription}</td>
                  </tr>
                  <tr>
                    <td>Quantity</td>
                    <td>{detail?.quantity}</td>
                  </tr>
                </tbody>
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
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
