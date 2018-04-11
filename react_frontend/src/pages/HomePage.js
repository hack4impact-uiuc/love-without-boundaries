import React from 'react';
import styled from 'styled-components';
import { Grid, Col, Row, Image, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { graphql, QueryRenderer } from 'react-relay';
import StyledButton from '../components/button';
import StudentListItem from '../components/studentListItem'
import environment from '../relay/environment';
import Login from '../components/login';
import { getFileInfo, setPermissionToAllRead, copyFile, setPermissionToAllEdit } from '../Gapi';

type Props = {
    /**/ 
}
const HomeSection = styled.div`
    background: url("https://file-xvqjcpzhcj.now.sh");
    background-size: cover;  
    width: 100%;
    display: block;
    height: 700px;
`

const SignInSection = styled.div`
    text-align: center;
`;
const SignInButton = styled.div`
    background-color: #C04448;
    color: #ffffff;
    height: 50px;
    width: 100px;
    padding: 12px 20px;
    margin: 10px 10px;
    text-align: center;
    border-radius: 6px;
    font-size: 16px;
    vertical-align: middle;
`;
const LogoRow = styled.div`
    padding-top: 20px;
`;
class HomePage extends React.Component<Props>{
    constructor(props){
        super(props);
        this.state = {
            signup: false
        };
    }
    onSignUp = (e) => {
        this.setState({
            signup: true
        });
    }
    getInfo = (e) => {
        copyFile('1pUaxSXVHrgRkhs6HNqMIbwFFP7hRTaNedg_GKlFjbtQ').then(r => setPermissionToAllEdit(r.id)).then(r => console.log(r));
    }
    render() {
        return (
            
            <QueryRenderer
                    environment={environment}
                    query={graphql`
                        query HomePage_Query{
                            students {
                                id
                                ...studentListItem_student
                            }
                        }   
                    `}
                    variables={{}}
                    render={({ props }) => {
                        return (
                            <div> 
                            <HomeSection className="container">
                                <LogoRow className="row">
                                    <Col xs={5} sm={4} style={{paddingLeft: 15}}>
                                        <Image src="https://www.lovewithoutboundaries.com/sites/lwb3/templates/default/images/logo.svg" responsive />
                                    </Col>
                                    <Col xs={1} sm={6}></Col>
                                    <Col xs={5} sm={2}>
                                        <SignInSection>
                                        { 
                                            this.state.signup ?
                                            <div>
                                                <p>Are you a...</p>
                                                <SignInButton className="btn">Student</SignInButton>
                                                <SignInButton className="btn">Teacher</SignInButton>
                                                <SignInButton className="btn">Admin</SignInButton>
                                            </div>
                                            : 
                                            <div>
                                                <button className='btn btn-primary' onClick={this.getInfo}>Temp Button</button>
                                                <Login/>
                                                <SignInButton className="btn" onClick={this.onSignUp}>Sign Up</SignInButton>
                                            </div>
                                        }
                                        </SignInSection>
                                    </Col>
                                </LogoRow>
                            </HomeSection>
                            </div>
                        );
                    }}
                />
        );
    }
}

export default HomePage;