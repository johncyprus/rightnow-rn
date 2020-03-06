import React from 'react';

class Disease extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button class="button is-warning disease-button" onClick={() => {this.props.handleDiseaseDelete(this.props.index)}}>
                {this.props.disease}
            </button>
        )
    }
}

export default Disease;