import React from 'react';

class Nurse extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {id, name, description, hospital, avatar, specialty} = this.props.details;
        return (
            <div class="card nurse-card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                            <img src={avatar} />
                            </figure>
                        </div>
                    </div>
                        <div class="media-content">
                            <p class="title is-3">{name}, RN</p>
                            <p class="subtitle is-4">{specialty} | {hospital}</p>
                            <p class="subtitle is-6">{description}</p>
                        </div>
                    </div>
            </div>

        )
    }
}

export default Nurse;