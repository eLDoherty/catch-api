import React, { Fragment } from 'react';
import axios from 'axios';
import ModalComp from '../../component/Modal/ModalComp';

class FreeFire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            ff_username: "",
        }
    }

    submitButton = () => {
        let url = `https://api-xyz.com/trueid/freefire/?id=${this.state.id}`;
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
        return(
        <Fragment>
            <h1>Free Fire</h1>
                <hr/>    
                <div className="mobile-legends">
                    <div className="form-input">
                        <input id="id" value={this.state.id} onChange={this.handlerInput} name="id" placeholder='Input ID' />
                        <br />
                        <button onClick={this.submitButton} className='button-check'>Check</button>
                    </div>
                </div>
               <ModalComp title="Free Fire" data={this.state} />
        </Fragment>
        )
    }
}

export default FreeFire;