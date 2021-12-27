import React, { Component } from 'react';
import './scss/MuteLink.scss'

class MuteLink extends Component {
    render() {
        return(
            <div className="MuteLink">
                <div className="MuteLink-parent">
                    <div className="MuteLink-wrapper">
                        <h2>***</h2>
                        <div className="MuteLink-bar"></div>
                        <h2>****</h2>
                    </div>
                    <h2 className="MuteLink-arrow">-></h2>
                </div>
            </div>
        );
    }
}

export default MuteLink;