import React, { Component } from 'react';
import './scss/ActiveLink.scss'

class ActiveLink extends Component {
    render() {
        return(
            <div className="Activelink">
                <div className="Activelink-parent">
                    <div className="Activelink-wrapper">
                        <h2>GMK</h2>
                        <div className="Activelink-bar"></div>
                        <h2>MIKA</h2>
                    </div>
                    <h2 className="Activelink-arrow">-></h2>
                </div>
            </div>
        );
    }
}

export default ActiveLink;