import React, { Component } from 'react';
import "../../App.css";
import { Button, Modal, DropdownButton, MenuItem, FormControl } from 'react-bootstrap';

class itemModal extends Component {
  constructor(props) {
    super(props)
    
    this.handleClose = this.handleClose.bind(this);
    this.setSize = this.setSize.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this)
    this.setColor = this.setColor.bind(this)
    this.handleItemUpdate = this.handleItemUpdate.bind(this);
  }

  handleClose() {
    this.props.modalUpdate({ show: false });
  }

  setSize(e) {
    this.props.modalUpdate({
      size: e.target.textContent
    })
  }
  setColor(e) {
    this.props.modalUpdate({ color: e.target.textContent })
  }

  handleQuantity(e) {
    let quantity = this.props.modal.quantity;
    if (e.target.textContent === "-" && this.props.modal.quantity > 1) {
      quantity -= 1
    }
    else if (e.target.textContent === "+") {
      quantity += 1
    }

    this.props.modalUpdate({
      quantity: quantity
    })
  }

  handleItemUpdate() {
    this.props.itemUpdate(this.props.modal);

    this.props.modalUpdate({ show: false });
  }

  render() {
    return (
      <div>
        <Modal show={this.props.modal.show}>
          <Modal.Header>
            <button type="button" className="close" onClick={this.handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
            <Modal.Title>{this.props.modal.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4 modal-item-details">
                  <h5>{this.props.modal.name}</h5>
                  <p className="modal-price"><span>$</span>{this.props.modal.price}</p>
                  <p>{this.props.modal.style}</p>
                   <div className="color-container">
                  <p>Color:{this.props.modal.color}</p>
                  <DropdownButton title="" id="bg-nested-dropdown" className="modal-color" style={{ background: this.props.modal.color}}>
                    <MenuItem  eventKey="1" onClick={this.setColor}>red</MenuItem>
                    <MenuItem  eventKey="2" onClick={this.setColor}>blue</MenuItem>
                    <MenuItem  eventKey="3" onClick={this.setColor}>pink</MenuItem>
                  </DropdownButton>
                  </div>

                  <DropdownButton title={this.props.modal.size} id="bg-nested-dropdown" bsStyle="success">
                    <MenuItem eventKey="1" onClick={this.setSize}>Small</MenuItem>
                    <MenuItem eventKey="2" onClick={this.setSize}>Medium</MenuItem>
                    <MenuItem eventKey="3" onClick={this.setSize}>Large</MenuItem>
                    <MenuItem eventKey="4" onClick={this.setSize}>Extra large</MenuItem>
                  </DropdownButton>
                  <div className="modal-quantity">
                    <FormControl style={{ width: "50px" }}
                      type="text"
                      value={this.props.modal.quantity}
                      readOnly
                    />
                    <div>
                      <Button onClick={this.handleQuantity}>+</Button>
                      <Button onClick={this.handleQuantity}>-</Button>
                    </div>

                  </div>

                </div>
                <div className="col-md-4">
                  <img className="image" src={this.props.modal.image} alt="item" />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleItemUpdate} bsStyle="primary">Edit</Button>
          </Modal.Footer>
        </Modal>
      </div>


    )
  }
}

export default itemModal;