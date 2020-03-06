import React from 'react';

import Nurse from './Nurse';
import NurseView from './NurseView';

class NurseList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedNurse: null
        }
    }

    renderNurses = () => {
        if (this.props.nurseList.length > 0) {
            return this.props.nurseList.map(nurse => {
                return (
                    <Nurse details={nurse} handleListingClick={this.handleListingClick} />
                )
            });
        }
    }

    renderNurseView = () => {
        if (this.state.selectedNurse) {
            return (
                <NurseView selectedNurse={this.state.selectedNurse}/>
            )
        }
    }

    handleListingClick = (details) => {
        this.setState({selectedNurse: details})
    }

    render() {
        return (
            <>
                <h1 className="info-section">Nurses near you</h1>
                <div className="nurse-list">
                    <div className="nurse-list-wrapper">
                        {this.renderNurses()}
                    </div>
                    <div className="nurse-viewer-wrapper">
                        {this.renderNurseView()}
                    </div>
                </div>
            </>
        )
    }
}

export default NurseList;