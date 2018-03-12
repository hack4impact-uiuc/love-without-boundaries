import React from 'react';
import { GoogleLogin } from 'react-google-login';


class Login extends React.Component{
    responseGoogle = (response) => {
        console.log(response);
    }
    render(){
        return(
            <GoogleLogin
                clientId="162938498619-oloa040ksgc64aubtv7hi7pmnbanmmul.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
            />
        );
    }
}
export default Login;