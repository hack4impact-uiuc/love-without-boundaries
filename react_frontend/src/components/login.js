import React from 'react';
import { withRouter } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
// import cookie from 'react-cookie';

class Login extends React.Component {
    responseGoogle = (response) => {
        console.log(response.profileObj.googleId);
        console.log(response.profileObj.email);
        console.log(response.profileObj.givenName + response.profileObj.familyName);
        // console.log(respose)

        return fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': 'GET, POST',
                // RequiredAuthorization: 'false',
                // Authorization: 'Login',
                // Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXJpYSIsImVtYWlsIjoiYXJpYUBnbWFpbC5jb20iLCJ0b2tlbiI6IjEyMyIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNTI0MTkzMjIwLCJleHAiOjE1MjQyMDQwMjB9.RSK5zzwBzhnyqx8eAUtqg131xSMNJb5eGdLaUdHjJdI',
            },
            body: JSON.stringify({
                // query: operation.text,
                // variables,
                name: response.profileObj.googleId,
                email: response.profileObj.email,
                googleAuthToken: response.profileObj.googleId,
                role: 'student',
                // request: 'login',
                // name: 'aria',
            }),
        // }).then(resp => resp.json().then(r => console.log(r)));
        }).then(resp => resp.json().then(r => sessionStorage.setItem('jwt', r)));
    }
    // console.log(response.googleId);
    // // 104999516378689298517
    // // await fetch('http://localhost:8080/login', {
    // // method: 'POST',
    // // headers: {
    // // 'Content-Type': 'application/json',
    // // // RequiredAuthorization: 'false',
    // // // Authorization: 'Login',
    // // // Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXJpYSIsImVtYWlsIjoiYXJpYUBnbWFpbC5jb20iLCJ0b2tlbiI6IjEyMyIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNTI0MTkzMjIwLCJleHAiOjE1MjQyMDQwMjB9.RSK5zzwBzhnyqx8eAUtqg131xSMNJb5eGdLaUdHjJdI',
    // // },
    // // body: JSON.stringify({
    // // // query: operation.text,
    // // // variables,
    // // "name" : response.profileObj.googleId,
    // // "email" : response.profileObj.email,
    // // "googleAuthToken" : response.profileObj.googleId,
    // // "role": "student"
    // // // request: 'login',
    // // // name: 'aria',
    // // }),
    // // }).then(response => (response.json()))

    // // console.log(response)
    // this.props.history.push('/student');
    // return "hi"
    // }
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
                buttonText="Login"
                accessType="offline"
                scope="https://www.googleapis.com/auth/drive.file"
                onSuccess={this.responseGoogle}
            />
        );
    }
}
export default withRouter(Login);
