import React, { Button } from 'react';
import { withRouter } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
// import cookie from 'react-cookie';
import jwt_decode from 'jwt-decode';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../relay/environment';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ENGINE_METHOD_DIGESTS } from 'constants';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            id: '',
        };
    }


    getId = (props) => {
        console.log('IN GET ID');
        console.log(this.props.role);
        console.log(this.state.email);
        if (this.props.role === 'student') {
            for (let i = 0; i < props.students.length; i++) {
                if (props.students[i].email === this.state.email) {
                    console.log(props.students[i].id);
                    this.props.history.push('/student', { student: { id: props.students[i].id } });
                }
            }
        } else if (this.props.role === 'teacher') {
            for (let i = 0; i < props.teachers.length; i++) {
                if (props.teachers[i].email === this.state.email) {
                    console.log(props.teachers[i].id);
                    this.props.history.push('/teacher', { teacher: { id: props.teachers[i].id } });
                }
            }
        } else if (this.props.role === 'admin') {
            for (let i = 0; i < props.admins.length; i++) {
                if (props.admins[i].email === this.state.email) {
                    console.log(props.admins[i].id);
                    this.props.history.push('/admin', { admin: { id: props.admins[i].id } });
                }
            }
        }
    }

    responseGoogle = (auth) => {
        fetch('http://localhost:8080/auth/google', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tokenId: auth.tokenId, role: this.props.role }),
        }).then(resp => resp.json()).then(r => sessionStorage.setItem('type', r.role)).catch(console.error);

        this.setState({
            email: jwt_decode(auth.tokenId).email,
        });
    }

    render() {
        return (

            <div>
                {this.state.email === '' &&
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
                }
                { this.state.email !== '' &&

                    <QueryRenderer
                        environment={environment}
                        query={graphql`
                            query signinQuery{
                                students {
                                    email
                                    id
                                }
                                teachers {
                                    email
                                    id
                                }
                                admins {
                                    email
                                    id
                                }
                            }  
                        `}
                        variables={{}}
                        render={({ props }) => {
                            if (!props) {
                                return (
                                    <div>Loading...</div>
                                );
                            }
                            return (
                                <div>

                                    {this.getId(props)}

                                </div>
                            );
                        }}
                    />

                }
            </div>

        );
    }
}
export default withRouter(SignIn);
