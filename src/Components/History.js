import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

import Disease from './Disease';

class History extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [],
            value: '',
            submitted: false
        }
    }

    handleInputChange = (e) => {
        this.setState({value: e.target.value});
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let newHistory = [...this.state.history];
        newHistory.push(this.state.value);
        this.setState({
            history: newHistory,
            value: ''
        });
    }

    handleDiseaseDelete = (index) => {
        let editedHistory = [...this.state.history];
        editedHistory.splice(index, 1);
        this.setState({
            history: editedHistory
        });
    }

    renderDiseaseButton = () => {
        let list = this.state.history.map((disease, index) => {
            return (
                <Disease 
                    key={index} 
                    index={index} 
                    disease={disease} 
                    handleDiseaseDelete={this.handleDiseaseDelete}
                    />
            )
        });
        return list;
    }

    handleHistorySubmit = () => {
        let body = {
            id: this.props.patientId,
            history: this.state.history
        };
        Axios.put('/medicalHistory', body)
            .then(response => {
                this.setState({submitted: true});
            })
            .catch(error => {
                console.log('Error saving medical history:', error);
            })
    }

    render() {
        return (
            <div>
                <h1 className="info-section">Tell us about your health.</h1>

                <form className="history-input-form" onSubmit={this.handleFormSubmit}>
                    <input 
                        className="input is-primary is-rounded is-medium" 
                        type="text"
                        value={this.state.value} 
                        placeholder="Type your known diagnoses individually, followed by Enter key"
                        onChange={this.handleInputChange}
                        />
                </form>

                <div className="history-list">
                    {this.renderDiseaseButton()}
                    <div className="submit-history">
                        <button 
                            className="button is-warning "
                            onClick={this.handleHistorySubmit}
                            >
                            {this.state.submitted ? "Saved!" : "Submit History"}
                        </button>
                    </div>
                </div>

                <div className="proceed-to-specialties">
                    <Link to="/specialty">
                        <button className="button is-primary ">Specialties</button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default History;