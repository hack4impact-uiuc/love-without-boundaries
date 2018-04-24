import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import addURL from '../relay/mutations/addURL';
import addFile from '../Gapi';
import environment from '../relay/environment';
// reactClass --
class googleDocButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.url,
        };
    }
    componentDidMount() {
        if (this.state.url) {
            return;
        }
        // Need to get userId
        addFile(/*UserId */).then((res) => {
            if (res == undefined || res.error) {
                // return;
                throw Error('Insufficient Priviledges, please contact Admin');
            }
            addURL(environment, this.location.state.student.id, res.url);
        }).catch(err => console.err(err.message));
    }
    render() {
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

