import React, { Component } from 'react';
import "../../App.css";

class itemModal extends Component {
  constructor(props) {
    super(props)
    this.handleUpdateModal = this.handleUpdateModal.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

   handleUpdateModal(){
    this.props.modalUpdate({class: "hide"});
  }

  updateItem(){
    this.props.modalUpdate({ class: "hide" });
  }

  render() {
    return (
      <div className={this.props.modal.class} id="exampleModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
             
              <button type="button" onClick={this.handleUpdateModal} className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-body">
              <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-4 modal-item-details">
                    <p>{this.props.modal.name}</p>
                    <p className="modal-price"><span>$</span>{this.props.modal.price}</p>
                    <p>{this.props.modal.style}</p>
                    <p>Color:{this.props.modal.color}</p>
                    <p>{this.props.modal.quantity}</p>
                    </div>
                    <div className="col-md-4">
                      <img className="image" src={this.props.modal.image} alt="item" />
                    </div>
                  </div>
                  
              </div>
               
              </div>
              
              <div class="modal-footer">
                <button className="btn btn-primary" onClick={this.updateItem}  >Edit</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default itemModal;