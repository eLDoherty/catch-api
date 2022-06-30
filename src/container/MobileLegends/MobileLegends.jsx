import React, { Fragment } from 'react';
import axios from 'axios'
import './mobilelegends.css';
import ModalComp from '../../component/Modal/ModalComp';

class MobileLegends extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            server: "",
            username: "",
        }
    }

    submitButton = () => {
        let url = `https://api-xyz.com/trueid/mobilelegends/?id=${this.state.id}&zone=${this.state.server}`;
        axios.get(url).then((res)=> { 
            this.setState({
                username: res.data.nickname
            })
        })
    }

    handlerInput = (event) => {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        })
    }
    
    render() {
        return (
            <Fragment>
                <h1>Mobile Legends</h1>
                <hr/>    
                <div className="mobile-legends">
                    <div className="form-input">
                        <input id="id" value={this.state.id} onChange={this.handlerInput} name="id" placeholder='Input ID' />
                        <br />
                        <input id="server" value={this.state.server}  onChange={this.handlerInput} name="server" placeholder='Input Server' />
                        <br />
                        <button onClick={this.submitButton} className='button-check'>Check</button>
                    </div>
                </div>
               <ModalComp title="Mobile Legends" data={this.state} />
            </Fragment>
        )
    }
}

export default MobileLegends;