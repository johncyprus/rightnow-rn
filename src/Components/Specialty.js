import React from 'react';
import {Link} from 'react-router-dom';

class Specialty extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            specialty: '',
            photo: null
        }
    }

    handleSpecialtyClick = (e) => {
        this.setState({
            specialty: e.target.name,
            photo: e.target.getAttribute('data-photo')
        });
        this.props.chooseSpecialty(e.target.name);
    }

    renderSpecialtyImage = () => {
        if (this.state.photo) {
            return (
                <figure className="image is-480x600 specialty-photo">
                    <img src={this.state.photo} />
                </figure>
            )
        }
    }

    render() {
        return (
            <div>
                <h1 className="info-section">Pick a Specialty</h1>
                <div className="specialty-wrapper">
                    <div className="specialty-list">
                        <button 
                            className="button is-rounded is-medium is-fullwidth is-link specialty" 
                            name="pediatrics" 
                            value="1" 
                            data-photo="https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
                            onClick={this.handleSpecialtyClick}>Pediatrics</button>
                        <button 
                            className="button is-rounded is-medium is-fullwidth is-warning specialty" 
                            name="geriatrics" 
                            value="2" 
                            data-photo="https://images.unsplash.com/photo-1504778995644-77707b624d5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                            onClick={this.handleSpecialtyClick}>Geriatrics</button>
                        <button 
                            className="button is-rounded is-medium is-fullwidth is-success specialty" 
                            name="transplant" 
                            value="3" 
                            data-photo="https://images.unsplash.com/photo-1538043153213-2a1914e811bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                            onClick={this.handleSpecialtyClick}>Transplant</button>
                        <button 
                            className="button is-rounded is-medium is-fullwidth is-danger specialty" 
                            name="cardiac" 
                            value="4" 
                            data-photo="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                            onClick={this.handleSpecialtyClick}>Cardiac</button>
                        <button 
                            className="button is-rounded is-medium is-fullwidth is-info specialty" 
                            name="generalmedicine" 
                            value="5" 
                            data-photo="https://images.unsplash.com/photo-1551846954-944c8ad1b0be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                            onClick={this.handleSpecialtyClick}>General Medicine</button>
                        <button 
                            className="button is-rounded is-medium is-fullwidth is-link specialty" 
                            name="postpartum" 
                            value="6" 
                            data-photo="https://images.unsplash.com/photo-1549633564-3ab4c92ff2d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                            onClick={this.handleSpecialtyClick}>Postpartum</button>
                        <button 
                            className="button is-rounded is-medium is-fullwidth is-warning specialty" 
                            name="oncology" 
                            value="7" 
                            data-photo="https://images.unsplash.com/photo-1576089172869-4f5f6f315620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                            onClick={this.handleSpecialtyClick}>Oncology</button>
                    </div>

                    <div className="specialty-images">
                        {this.renderSpecialtyImage()}
                    </div>

                </div>

                <div className="proceed-button">
                    <Link to='/nurselist'>
                        <button class="button is-primary ">Find Nurses</button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default Specialty;