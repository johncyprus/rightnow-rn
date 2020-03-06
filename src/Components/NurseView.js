import React from 'react';
import faker from 'faker';

class NurseView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img src={this.props.selectedNurse.avatar} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                        <img src={this.props.selectedNurse.avatar}/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{this.props.selectedNurse.name}, RN</p>
                        <p className="subtitle is-6">{this.props.selectedNurse.specialty} | {this.props.selectedNurse.hospital}</p>
                    </div>
                    </div>

                    <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>#{faker.lorem.word()}</a>.
                    <a href="#">#{faker.lorem.word()}</a> <a href="#">#{faker.lorem.word()}</a>
                    <br/>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
                </div>
        )
    }
}

export default NurseView;