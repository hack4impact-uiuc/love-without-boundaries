import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import addURL from '../relay/mutations/addURL';
import { addFile, copyFile } from '../Gapi';
import environment from '../relay/environment';
import PaddedButton from './button';
import jwtDecode from 'jwt-decode';

class googleDocButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.url,
        };
    }
    componentDidMount() {
        if (this.props.url || this.state.url) {
            // student already has playground doc
            return;
        }
        const token = jwtDecode(sessionStorage.getItem('token'));
        if (
            token === null ||
            !token ||
            token.userType !== 'student' ||
            token.gapi_access_token.length === 0
        ) {
            console.error('Google Docs Playground: User not logged in.');
            return;
        }
        // Need to get userId, copy specific empty file
        copyFile('1zs9WFnmcXvUYug1TpwtAiHAFKeTM5m_A5nY1wlzWeWU')
            .then(res => {
                console.log(res);
                if (
                    res == undefined ||
                    res.error ||
                    token.userType !== 'student' ||
                    res.id.length === 0 ||
                    res.id === null
                ) {
                    // return;
                    throw Error(
                        'Google Docs Playground: Insufficient Priviledges, please contact Admin',
                    );
                }
                // add it to the database
                addURL(
                    environment,
                    token.id,
                    `https://docs.google.com/document/d/${res.id}/edit`,
                );
                this.setState({
                    url: `https://docs.google.com/document/d/${res.id}/edit`,
                });
            })
            .catch(err => console.error(err.message));
    }
    render() {
        return (
            <a href={this.state.url}>
                <PaddedButton type="button" className="btn btn-lwb">
                    Playground
                </PaddedButton>
            </a>
        );
    }
}

export default googleDocButton;
