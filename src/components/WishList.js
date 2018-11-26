import React from "react";

export class WishList extends React.Component {
  render() {
    return (
      <div className="container col-md-12 py-5">
        <div className="row">
          <div class="card card-primary col-md-8">
            <div class="card-body">
              <h6 class="card-header">Product</h6>
              <div className="py-3">Image</div>
              <p class="card-text">productDescription</p>
              <button className="btn btn-primary">Buy</button>
            </div>
          </div>
          <div className="col-md-2 container border">Status</div>
        </div>
      </div>

      /*<div className="productCard productCardContent border container rounded col-md-12">
        <div className="row py-3">
          <div className="col-md-3 d-flex justify-content-start">
            <h5>Product Picture</h5>
          </div>
          <div className="col-md-3 d-flex justify-content-center">
            <h6>product name</h6>
          </div>
          <div className="col-md-3 d-flex justify-content-end">
            <h6>Brand Picture</h6>
          </div>
          <div className="container col-md-3 text-center">
            <h6>status</h6>
          </div>
        </div>
      </div>*/
    );
  }
}

export default WishList;
