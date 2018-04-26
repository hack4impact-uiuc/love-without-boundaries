import React, { Button } from 'react';
import { withRouter } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
// import cookie from 'react-cookie';

class SignIn extends React.Component {
    responseGoogle = (auth) => {
        fetch('http://localhost:8080/auth/google', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tokenId: auth.tokenId, role: this.props.role }),
        }).then(resp => resp.json()).then(console.log).catch(console.error);

        const expiry = new Date(auth.tokenObj.expires_at);
        console.log(document.cookie);
        console.log(auth.role);
        sessionStorage.setItem('token', auth.tokenId);
        document.cookie = `token=${auth.tokenId}`;
        console.log(document.cookie);
        this.props.history.push(`/${this.props.role}`);
    }

    render() {
        return (

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

        );
    }
}
export default withRouter(SignIn);
