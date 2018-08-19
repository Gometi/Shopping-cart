import React, { Component } from 'react';
import "../../App.css";

class itemModal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="" id="exampleModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <p>{this.props.modal.name}</p>
              <button className="btn btn-primary" >Edit</button>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default itemModal;