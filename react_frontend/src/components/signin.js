import React, { Button } from 'react';
import { withRouter } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
// import cookie from 'react-cookie';
import jwt_decode from 'jwt-decode';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class SignIn extends React.Component {
    responseGoogle = (auth) => {
        fetch('http://localhost:8080/auth/google', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tokenId: auth.tokenId, role: this.props.role }),
        }).then(resp => resp.json()).then(r => sessionStorage.setItem('type', r.role)).catch(console.error);

        // const expiry = new Date(auth.tokenObj.expires_at);
        sessionStorage.setItem('token', auth.tokenId);
        this.props.history.push(`/${this.props.role}`);
    }

    render() {
        return (
            <div>
                <GoogleLogin
                    className="btn"
                    style={{
                        backgroundColor: '#C04448',
                        color: '#ffffff',
                        height: '50px',
                        width: '100px',
                        padding: '12px 20px',
                        margin: '10px 10px',
                        textAlign: 'center',
                        borderRadius: '6px',
                        fontSize: '16px',
                        verticalAlign: 'middle',
                    }}
                    clientId="162938498619-oloa040ksgc64aubtv7hi7pmnbanmmul.apps.googleusercontent.com"
                    responseType="id_token"
                    buttonText={this.props.role}
                    scope="https://www.googleapis.com/auth/drive.file"
                    onSuccess={this.responseGoogle}
                />
            </div>

        );
    }
}
export default withRouter(SignIn);
