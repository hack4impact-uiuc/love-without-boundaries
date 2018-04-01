import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// reactClass --
class googleDocButton extends React.Component {
    render() {
        console.log(this.props.url);
        return (
            <div>
                <a href={this.props.url}>
                    <button type="button" className="btn btn-info">Google Docs Playground</button>
                </a>
            </div>
        );
    }
}

export default googleDocButton;

