import React, { Fragment } from 'react';
import './modalcomp.css';

class ModalComp extends React.Component {

    render(){
        return(
            <Fragment>
                <div className="modal-section">
                    <h3>{this.props.title}</h3>
                    <p>Account ID / Server: <span>{this.props.data.id} {this.props.data.server}</span></p>
                    <p>Account Username: <span>{this.props.data.username}</span></p>
                </div>
            </Fragment>
        )
    }

 }

 export default ModalComp;