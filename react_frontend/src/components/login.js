import React from 'react';
import { withRouter } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';


class Login extends React.Component {
    responseGoogle = (response) => {
        console.log(response);
        // check if user exists + permission levels + jwt
        // set HTML storage to store jwt
        this.props.history.push('/student');
    }
    failedGoogle = (response) =>{
        console.log(response);
    }
    render(){
        return(
            <GoogleLogin
                className='btn'
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
                    verticalAlign: 'middle'
                }}
                clientId='162938498619-oloa040ksgc64aubtv7hi7pmnbanmmul.apps.googleusercontent.com'
                buttonText='Login'
                onSuccess={this.responseGoogle}
                onFailure={this.failedGoogle}
            />
        );
    }
}
export default withRouter(Login);