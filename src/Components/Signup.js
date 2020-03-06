import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ethnicity: "ChooseOption",
            sex: "ChooseSex",
            submitted: false
        }
    }

    handleInputChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSelectChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        Axios.post('/patientInfo', this.state)
            .then(response => {
                this.props.savePatientId(response.data);
                this.setState({submitted: true});
            })
            .catch(error => {
                console.log('Error saving info:', error);
            })
    }

    renderSubmitButton = () => {
        // conditionally render the submit button
        if (Object.keys(this.state).length >= 13) {
            return <button class="button is-link is-outlined" onClick={this.handleFormSubmit}>{this.state.submitted ? "Saved!" : "Submit Info"}</button>
        } else {
            return <button class="button is-danger is-outlined" onClick={this.handleFormSubmit} disabled>Submit Info</button>
        }
    }

    render() {
        return (
            <div>
                <div className="info-section">
                    <h1>Let's Get To Know You</h1>
                </div>
    
                <form className="patient-form">
                    <div className="form-block">
                            <label>
                                First Name: 
                                <input className="input" name="firstname" type="text" onChange={this.handleInputChange}/>
                            </label>
                            <label>
                                Last Name:
                                <input className="input" name="lastname" type="text" onChange={this.handleInputChange}/>
                            </label>
                            <label>
                                Age: 
                                <input className="input" name="age" type="number" onChange={this.handleInputChange}/>
                            </label>
                            <label>
                                Date of Birth: 
                                <input className="input" name="birthday" type="date" onChange={this.handleInputChange}/>
                            </label>
                            <label>
                                Address Line 1: 
                                <input className="input" name="addressline1" type="text" onChange={this.handleInputChange}/>
                            </label>
                            <label>
                                Address Line 2: 
                                <input className="input" name="addressline2" type="text" onChange={this.handleInputChange}/>
                            </label>
                            <label>
                                City: 
                                <input className="input" name="city" type="text" onChange={this.handleInputChange}/>
                            </label>
                    </div>

                    <div className="form-block">
                            <label>
                                State: 
                                <input className="input" name="state" type="text" onChange={this.handleInputChange}/>
                            </label>
                            <label>
                                Zip Code: 
                                <input className="input" name="zipcode" type="number" onChange={this.handleInputChange}/>
                            </label>
                            <label>
                                Primary Language: 
                                <input className="input" name="language" type="text" onChange={this.handleInputChange}/>
                            </label>
                            <label>
                                Email: 
                                <input className="input" name="email" type="text" onChange={this.handleInputChange}/>
                            </label>
                            <div className="select form-dropdown sex">
                                <label>
                                    Sex: 
                                    <select className="select-sex" name="sex" value={this.state.sex} onChange={this.handleSelectChange}>
                                        <option value="ChooseSex">Choose Sex</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </label>
                            </div>
                            <div className="select form-dropdown ethnicity">
                                <label>
                                    Ethnicity: <br/>
                                    <select className="select-ethnicity" name="ethnicity" value={this.state.ethnicity} onChange={this.handleSelectChange}>
                                        <option value="ChooseOption">Choose Option</option>
                                        <option value="Asian">Asian</option>
                                        <option value="Black">Black</option>
                                        <option value="Caucasian">Caucasian</option>
                                        <option value="Hispanic/Latino">Hispanic/Latino</option>
                                        <option value="Native/Indigenous">Native/Indigenous</option>
                                        <option value="Decline">Decline to Answer</option>
                                    </select>
                                </label>
                            </div>
                            <div className="info-submit">
                                <h2 className="form-warning">All Forms Required. Click submit when complete.</h2>
                                {this.renderSubmitButton()}
                            </div>
                    </div>
                </form>
                <div className="signup-buttons">
                
                    <Link to='/signup/history'>
                        <button class="button is-primary ">Medical History</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Signup;