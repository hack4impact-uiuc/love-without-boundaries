import React from 'react';
import { withRouter } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
// import cookie from 'react-cookie';

class SignIn extends React.Component {
    responseGoogle = (response) => fetch(`http://localhost:8080/${this.props.requestType}`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: response.profileObj.googleId,
            email: response.profileObj.email,
            googleAuthToken: response.profileObj.googleId,
            role: this.props.role,
        }),
    }).then(resp => resp.json().then(r => console.log(r + this.props.requestType) && sessionStorage.setItem('jwt', r)))

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
                buttonText={this.props.role}
                accessType="offline"
                scope="https://www.googleapis.com/auth/drive.file"
                onSuccess={this.responseGoogle}
            />
        );
    }
}
export default withRouter(SignIn);
