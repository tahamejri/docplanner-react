import React, { Component } from 'react';


class PatDoc extends React.Component {
    render() {
        return (
            <div className="arimg">
                <div className="inlineparagraph">
                    <p>We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p>
                </div>

                <div className="imagecontainer" id={this.props.ide}>
                    <div className="titles">
                        <span>{this.props.for}</span>
                        <h2>Find a doctor, book a visit and solve any health-related doubt</h2>
                    </div>
                    <div className="imgand">
                    {this.props.select }
                        <img src="https://www.docplanner.com/img/screen-marketplace@2x.png" />
                    </div>
                </div>
            
            </div>

        )
    }
}

export default PatDoc;