import React from 'react';
import {Link} from 'react-router-dom';

class Specialty extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            specialty: ''
        }
    }

    handleSpecialtyClick = (e) => {
        this.setState({specialty: e.target.name});
        this.props.chooseSpecialty(e.target.name);
    }

    render() {
        return (
            <div>
                <div>
                    <h1 className="info-section">Pick a Specialty</h1>

                    <button className="button is-rounded is-outlined is-medium is-fullwidth is-link specialty" name="pediatrics" value="1" onClick={this.handleSpecialtyClick}>Pediatrics</button>
                    <button className="button is-rounded is-outlined is-medium is-fullwidth is-warning specialty" name="geriatrics" value="2" onClick={this.handleSpecialtyClick}>Geriatrics</button>
                    <button className="button is-rounded is-outlined is-medium is-fullwidth is-success specialty" name="transplant" value="3" onClick={this.handleSpecialtyClick}>Transplant</button>
                    <button className="button is-rounded is-outlined is-medium is-fullwidth is-danger specialty" name="cardiac" value="4" onClick={this.handleSpecialtyClick}>Cardiac</button>
                    <button className="button is-rounded is-outlined is-medium is-fullwidth is-info specialty" name="generalmedicine" value="5" onClick={this.handleSpecialtyClick}>General Medicine</button>
                    <button className="button is-rounded is-outlined is-medium is-fullwidth is-link specialty" name="postpartum" value="6" onClick={this.handleSpecialtyClick}>Postpartum</button>
                    <button className="button is-rounded is-outlined is-medium is-fullwidth is-warning specialty" name="oncology" value="7" onClick={this.handleSpecialtyClick}>Oncology</button>

                </div>

                <div className="proceed-button">
                    <Link to='/nurselist'>
                        <button class="button is-primary is-outlined">Find Nurses</button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default Specialty;