import React from 'react';
import styled from 'styled-components';
import jwt_decode from 'jwt-decode';
import { Link } from 'react-router-dom';
import { graphql, QueryRenderer } from 'react-relay';
import StyledButton from '../components/button';
import environment from '../relay/environment';
import SignIn from '../components/signin';
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
`;

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
`;

const SignInSection = styled.div`
    text-align: center;
`;
const SignInButton = styled.div`


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
`;

const LearningIcon = styled.div`
    background: url("https://file-emcfzpkgbu.now.sh/");
    width: 170px;
    height: 170px;
    position: relative;
    background-size: cover;  
    margin: 0 auto;
    margin-top: 20%;
    margin-bottom: 10%;

`;

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
`;

const TopBox = styled.div`
    background: url("https://file-unocxsjgra.now.sh");
    background-size: cover;  
    width: 100%;
    height: 300px;
`;

const BottomBox = styled.div`
    background: url("https://file-rfipjzwojd.now.sh/");
    background-size: cover;  
    width: 100%;
    height: 300px;
    position: relative;
    margin-right: 0%;
`;

const RightBox = styled.div`
    background-color: purple;
    width: 100%;
    height: 300px;
    position: relative;
`;

const LeftBox = styled.div`
    background-color: purple;
    width: 100%;
    height: 300px;
    position: relative;
`;

const BoxText = styled.div`
    font-weight: 200;
    font-size: 26px;
	text-align: center;
    position: relative;
    font-family: 'Montserrat';
    color: white;
`;
const BoxRightText = styled.div`
    font-weight: 200;
    font-size: 26px;
	text-align: left;
    position: relative;
    font-family: 'Montserrat';
    color: white;
    left: 10%;
`;
const BoxRightSubText = styled.div`
    font-weight: 100;
    font-size: 16px;
    text-align: left;
    position: relative;
    font-family: 'Montserrat';
    color: white;
    left: 10%;
    margin-right: 20%;
`;

const BoxSubText = styled.div`
    font-weight: 100;
    font-size: 16px;
	text-align: center;
    position: relative;
    font-family: 'Montserrat';
    color: white;
`;

class HomePage extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            loginOrSignup: false,
            role: '',
        };
    }
    onSignUp = (e) => {
        this.setState({
            loginOrSignup: 'register',
        });
    }
    onLogin = (e) => {
        this.setState({
            loginOrSignup: 'login',
        });
    }
    setup = (e) => {
        // this function is used to easily call the google drive setup function
        // this should be called once auth is setup for a newly registered student
        InitialStudentSetup(environment, 'hi');
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
                render={({ props }) => (
                    <HomeSection className="container-fluid">
                        <div className="row">
                            <SignInSection>
                                <DarkBox>The Learning Tool Mission
                                    <br />______
                                    <div className="lower"> Our goal is to prepare students for their future </div>
                                </DarkBox>
                                {
                                    ((this.props.location.state == undefined || this.props.location.state.signedIn) && (this.state.loginOrSignup === 'register' || this.state.loginOrSignup === 'login')) ?
                                        <div>
                                            <p>Are you a...</p>

                                            <SignIn role="student" requestType={this.state.loginOrSignup} />

                                            <SignIn role="teacher" requestType={this.state.loginOrSignup} />

                                            <SignIn role="admin" requestType={this.state.loginOrSignup} />

                                        </div>
                                        :
                                        <div>

                                            <SignInButton className="lower btn" onClick={this.onLogin}>Login</SignInButton>
                                            <SignInButton className="lower btn" onClick={this.onSignUp}>Sign up</SignInButton>
                                        </div>
                                }
                            </SignInSection>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-4">
                                <SignUpIcon />
                                <div className="caption">
                                            Sign up for an account
                                </div>
                                <br />
                                <div className="subCaption">
                                            Students can sign up for an account and will be paired with a tutor
                                </div>
                            </div>
                            <div className="col-12 col-sm-4">
                                <LearningIcon />
                                <div className="caption">
                                            Start learning
                                </div>
                                <br />
                                <div className="subCaption">
                                            Tutors will go over lessons with you and supplement your lessons with worksheets and quizzes
                                </div>
                            </div>
                            <div className="col-12 col-sm-4">
                                <AcheiveIcon />
                                <div className="caption">
                                        Get the results
                                </div>
                                <br />
                                <div className="subCaption">
                                            These lessons are to prepare students for high acheivement in national exams
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <br />
                            <br />
                            <div className="col-12 col-sm-6">
                                <div className="no-gutter">
                                    <TopBox />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="no-gutter">
                                    <RightBox>
                                        <br />
                                        <br />
                                        <BoxText>
                                                    Learn From Anywhere
                                        </BoxText>
                                        <br />
                                        <BoxText> ________</BoxText>
                                        <br />
                                        <br />
                                        <BoxSubText>
                                                    Lessons are accessible from many different devices
                                        </BoxSubText>
                                    </RightBox>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <LeftBox>
                                    <br />
                                    <br />
                                    <BoxRightText>
                                                    Our Product is Dope as Hell
                                    </BoxRightText>
                                    <br />
                                    <BoxRightText> ________</BoxRightText>
                                    <br />
                                    <br />
                                    <BoxRightSubText>
                                                    Use our product because we are dope as hell and this product will improve ur life by like 300%
                                    </BoxRightSubText>
                                </LeftBox>
                            </div>
                            <div className="col-12 col-sm-6">
                                <BottomBox />
                            </div>
                        </div>
                    </HomeSection>
                )}
            />
        );
    }
}

export default HomePage;
