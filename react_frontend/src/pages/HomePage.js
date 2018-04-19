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



import { getFileInfo, setPermissionToAllRead, copyFile, setPermissionToAllEdit, InitialStudentSetup } from '../Gapi';
type Props = {
    /**/ 
}
const HomeSection = styled.div`
    background-size: cover;  
    width: 100%;
    display: block;
    height: 1000px;
`

const DarkBox = styled.div`
    background: url("https://file-utocriqbzb.now.sh/");
    background-size: cover;  
    width: 100%;
    height: 300px;
    display: block;

    color: #FFFFFF;
    text-transform: uppercase;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 26px;
    margin: 0.5rem 2rem ;
	text-align: center;
    position: relative;
    padding-top: 8%;
    margin-top: 0%;
    right:0%;
    margin-left: 0%;
    left:0%;
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

const SignUpIcon = styled.div`
    background: url("https://file-zhzvumzlvc.now.sh/");
    width: 185px;
    height: 185px;
    position: relative;
    background-size: cover;  
    margin: 0 auto;
    margin-top: 18%;
    margin-bottom: 7%;
`

const LearningIcon = styled.div`
    background: url("https://file-emcfzpkgbu.now.sh/");
    width: 170px;
    height: 170px;
    position: relative;
    background-size: cover;  
    margin: 0 auto;
    margin-top: 20%;
    margin-bottom: 10%;

`

const AcheiveIcon = styled.div`
    background: url("https://file-hkbcghevuc.now.sh/");
    width: 185px;
    height: 185px;
    position: relative;
    display: block;
    background-size: cover;  
    margin: 0 auto;
    margin-top: 17%;
    margin-bottom: 7%;
`

const TopBox = styled.div`
    background: url("https://file-unocxsjgra.now.sh");
    background-size: cover;  
    width: 100%;
    height: 300px;
`

const BottomBox = styled.div`
    background: url("https://file-rfipjzwojd.now.sh/");
    background-size: cover;  
    width: 100%;
    height: 300px;
    position: relative;
    margin-right: 0%;
`

const RightBox = styled.div`
    background-color: purple;
    width: 100%;
    height: 300px;
    position: relative;
    margin-right: 0%;
`

const LeftBox = styled.div`
    background-color: purple;
    width: 100%;
    height: 300px;
    position: relative;
    margin-right: 0%;
`

const BoxText = styled.div`
    font-weight: 200;
    font-size: 26px;
	text-align: center;
    position: relative;
    font-family: 'Montserrat';
    color: white;
`
const BoxRightText = styled.div`
    font-weight: 200;
    font-size: 26px;
	text-align: left;
    position: relative;
    font-family: 'Montserrat';
    color: white;
    left: 10%;
`
const BoxRightSubText = styled.div`
    font-weight: 100;
    font-size: 16px;
    text-align: left;
    position: relative;
    font-family: 'Montserrat';
    color: white;
    left: 10%;
    margin-right: 20%;
`

const BoxSubText = styled.div`
    font-weight: 100;
    font-size: 16px;
	text-align: center;
    position: relative;
    font-family: 'Montserrat';
    color: white;
`

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
        setPermissionToAllRead("1CpYPiB35VMYhei0ary4X9ccq9GwyJJiG6XuV41YTOtQ").then(r => console.log(r)).catch(err => console.log(err));
        //copyFile('1pUaxSXVHrgRkhs6HNqMIbwFFP7hRTaNedg_GKlFjbtQ').then(r => setPermissionToAllRead(r.id)).then(r => console.log(r));
    }
    setup = (e) =>{
        // this function is used to easily call the google drive setup function
        // this should be called once auth is setup for a newly registered student
        InitialStudentSetup(environment,'hi');
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
                            <div > 
                            <head>
                                 <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"></link>
                            </head>
                            <HomeSection className="container" className="homePic">
                                <Grid fluid>
                                    <Row>
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
                                            <DarkBox>The Learning Tool Mission 
                                            <br></br>______
                                             <div className ="lower"> Our goal is to prepare students for their future </div>
                                                <Login/>
                                                <SignInButton className="lower" className="btn" onClick={this.onSignUp}>Sign Up</SignInButton>
                                            </DarkBox>
                                        }
                                        </SignInSection>

                                    </Row>
                                    <Row>
                                    <Col xs={12} sm={4}>
                                        <SignUpIcon></SignUpIcon>
                                        <div className="caption">
                                            Sign up for an account
                                        </div>
                                        <br></br>
                                        <div className="subCaption">
                                            Students can sign up for an account and will be paired with a tutor
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={4}>
                                        <LearningIcon></LearningIcon>
                                        <div className="caption">
                                            Start learning
                                        </div>
                                        <br></br>
                                        <div className="subCaption">
                                            Tutors will go over lessons with you and supplement your lessons with worksheets and quizzes
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={4}>
                                    <AcheiveIcon></AcheiveIcon>
                                    <div className="caption">
                                        Get the results
                                    </div>
                                    <br></br>
                                        <div className="subCaption">
                                            These lessons are to prepare students for high acheivement in national exams
                                        </div>
                                    </Col>
                                    </Row>

                                    <Row>
                                        <br></br>
                                        <br></br>
                                        <Col xs={12} sm={6} className="no-gutter">
                                            <TopBox>
                                            </TopBox>
                                        </Col>
                                        <Col xs={12} sm={6} className="no-gutter">
                                            <RightBox>
                                            <br></br>
                                            <br></br>
                                                <BoxText> 
                                                    Learn From Anywhere
                                                </BoxText>
                                                <br></br>
                                                <BoxText> ________</BoxText>
                                                <br></br>
                                                <br></br>
                                                <BoxSubText> 
                                                    Lessons are accessible from many different devices
                                                </BoxSubText>
                                            </RightBox>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={6} className="no-gutter">
                                            <LeftBox>
                                            <br></br>
                                            <br></br>
                                            <BoxRightText> 
                                                    Our Product is Dope as Hell
                                                </BoxRightText>
                                                <br></br>
                                                <BoxRightText> ________</BoxRightText>
                                                <br></br>
                                                <br></br>
                                                <BoxRightSubText> 
                                                    Use our product because we are dope as hell and this product will improve ur life by like 300%
                                                </BoxRightSubText>
                                            </LeftBox>
                                        </Col>
                                        <Col xs={12} sm={6} className="no-gutter">
                                            <BottomBox></BottomBox>
                                        </Col>
                                    </Row>

                                </Grid>
                            </HomeSection>
                            </div>
                        );
                    }}
                />
        );
    }
}

export default HomePage;