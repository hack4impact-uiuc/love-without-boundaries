import React, { Button } from 'react';
import { withRouter } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
// import cookie from 'react-cookie';
import jwt_decode from 'jwt-decode';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../relay/environment';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            id: '',
            name: '',
        };
    }

    responseGoogle = (auth) => {
        fetch('https://lwb-backend.now.sh/auth/google', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tokenId: auth.tokenId, role: this.props.role, accessToken: auth.accessToken }),
        }).then(resp => resp.json()).then(r => {
            console.log('r', r);
            sessionStorage.setItem('token', r.token);
            const { data } = r;
            this.props.history.push(`/${r.role}`, { [r.role]: { id: data.id, name: data.name } });
        }).catch(console.error);

        this.setState({
            email: jwt_decode(auth.tokenId).email,
        });
    }

    render() {
        return (

            <div style={{ display: 'inline-block' }}>
                {
                    this.state.email === '' &&
                    <GoogleLogin
                        className="btn sign-in-btn"
                        clientId="162938498619-oloa040ksgc64aubtv7hi7pmnbanmmul.apps.googleusercontent.com"
                        responseType="id_token"
                        buttonText={this.props.role}
                        scope="https://www.googleapis.com/auth/drive.file"
                        onSuccess={this.responseGoogle}
                    />
                }
            </div>

        );
    }
}
export default withRouter(SignIn);
