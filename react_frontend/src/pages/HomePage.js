import React from 'react';
import styled from 'styled-components';
import { Grid, Col, Row, Image, Button, Glyphicon } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { graphql, QueryRenderer } from 'react-relay';
import StyledButton from '../components/button';
import StudentListItem from '../components/studentListItem'
import environment from '../relay/environment';
import Login from '../components/login';

import './../../assets/Hover.css';
import NavBarHome from '../components/navBarHome';



type Props = {
    /**/ 
}
const HomeSection = styled.div`
    background: url("https://file-vyzcmyyyky.now.sh/");
    background-size: cover;  
    width: 100%;
    display: block;
    height: 1000px;
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

const GrayBox = styled.div`
    background-color: #777DA7;
    width: 100%;
    height: 5%;
    left: 0px;
    top: 50%;
    position: absolute;
    z-index: -1;
`;

const OverBox = styled.div`
    background-color: #721121;
    width: 100%;
    height: 10%;
    left: 0px;
    top: 60%;
    position: absolute;
    z-index: 10;
`;

const DoubleOverBox = styled.div`
    background-color: white;
    width: 100%;
    height: 60%;
    left: 0px;
    top: 70%;
    position: absolute;
    z-index: 10;
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
                            <head>
                                 <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"></link>
                            </head>
                            <HomeSection className="container" className="homePic">
                                <LogoRow className="row">
                                    <Col xs={5} sm={4} style={{paddingLeft: 15}}>
                                        <Image className="logoHome" src="https://www.lovewithoutboundaries.com/sites/lwb3/templates/default/images/logo.svg" responsive />
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
                                            <div className = "navBar">
                                                <Login className="homeButton" />
                                                <SignInButton className="homeButton" className="btn" onClick={this.onSignUp}>Sign Up</SignInButton>
                                            </div>
                                        }
                                        </SignInSection>
                                    </Col>
                                </LogoRow>
                                <div className="circle"> 
                                <br></br>
                                <br></br>
                                Welcome to our <br></br>Learning Tool
                                <br></br>
                                <a class="linkText" href="https://www.lovewithoutboundaries.com/"> Click here to learn more about Love Without Boundaries</a>
                                </div>
                                <OverBox></OverBox>
                                <DoubleOverBox>
                                <p>Book icon: <Glyphicon glyph="book"></Glyphicon> </p>   
                                </DoubleOverBox>
                            </HomeSection>
                            </div>
                        );
                    }}
                />
        );
    }
}

export default HomePage;