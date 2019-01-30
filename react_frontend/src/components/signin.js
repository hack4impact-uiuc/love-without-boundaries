import React, { Button } from 'react';
import { withRouter } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
// import cookie from 'react-cookie';
import jwt_decode from 'jwt-decode';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../relay/environment';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BACKEND_URL } from '../utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }

    responseGoogle = auth => {
        fetch(`${BACKEND_URL}/auth/google`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tokenId: auth.tokenId,
                role: this.props.role,
                accessToken: auth.accessToken,
            }),
        })
            .then(resp => resp.json())
            .then(r => {
                sessionStorage.setItem('token', r.token);
                const { data } = r;
                if (data === undefined) {
                    alert('Error Logging in. Try again.');
                    throw Error('Error Logging in.');
                }
                this.props.history.push(
                    r.role === 'admin' ? `/${r.role}/list` : `/${r.role}`,
                    { [r.role]: { id: data.id, name: data.name } },
                );
            })
            .catch(err => console.error(err));

        this.setState({
            email: jwt_decode(auth.tokenId).email,
        });
    };

    render() {
        return (
            <div style={{ display: 'inline-block' }}>
                {this.state.email === '' && (
                    <GoogleLogin
                        className="btn sign-in-btn"
                        clientId="162938498619-oloa040ksgc64aubtv7hi7pmnbanmmul.apps.googleusercontent.com"
                        responseType="id_token"
                        buttonText={this.props.role}
                        scope="https://www.googleapis.com/auth/drive"
                        onSuccess={this.responseGoogle}
                    />
                )}
            </div>
        );
    }
}
export default withRouter(SignIn);
