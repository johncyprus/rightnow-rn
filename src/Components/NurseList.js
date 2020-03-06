import React from 'react';
import Axios from 'axios';

import Nurse from './Nurse';

class NurseList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    renderNurses = () => {
        if (this.props.nurseList.length > 0) {
            return this.props.nurseList.map(nurse => {
                return (
                    <Nurse details={nurse}/>
                )
            })
        }
    }

    render() {
        return (
            <div className="nurse-list">
                <h1 className="info-section">Nurses near you</h1>
                <div>
                    {this.renderNurses()}
                </div>
            </div>
        )
    }
}

export default NurseList;