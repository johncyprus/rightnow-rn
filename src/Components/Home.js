import React from 'react';
import {Link} from 'react-router-dom';


function Home(props) {
    return (
        <div>
            <div className="intro-header">
                <h1>Freelance healthcare made easy.</h1>
            </div>
            <div className="info-section">
                <h2>We help patients find short-term nurses to assist with routine care at home.</h2>
            </div>
            <div className="info-section">
                <h5>If this is your first time, help us get to know you a little better.</h5>
            </div>

            <Link to='/signup'>
                <button class="button is-primary is-outlined">Signup</button>
            </Link>
        </div>
    )
}

export default Home;