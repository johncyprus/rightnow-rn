import React from 'react';

class Nurse extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const {name, description, hospital, avatar, specialty} = this.props.details;
        return (
            <div class="card nurse-card" onClick={()=> {this.props.handleListingClick(this.props.details)}}>
                <div class="card-content nurse-listing">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                            <img src={avatar} />
                            </figure>
                        </div>
                    </div>
                        <div class="media-content">
                            <p class="title is-4">{name}, RN</p>
                            <p class="subtitle is-5">{specialty} | {hospital}</p>
                            <p class="subtitle is-7">{description}</p>
                        </div>
                    </div>
            </div>

        )
    }
}

export default Nurse;