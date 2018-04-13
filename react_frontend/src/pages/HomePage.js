import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { graphql, QueryRenderer } from 'react-relay';
import StyledButton from '../components/button';
import StudentListItem from '../components/studentListItem'
import environment from '../relay/environment';
import Login from '../components/login';
import { getFileInfo, setPermissionToAllRead, copyFile, setPermissionToAllEdit, InitialStudentSetup } from '../Gapi';
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
                            <div> 
                            <HomeSection className="container">
                                <LogoRow className="row">
                                    <div className="col-xs-5 col-sm-4" style={{paddingLeft: 15}}>
                                        <img className="img-fluid" src="https://www.lovewithoutboundaries.com/sites/lwb3/templates/default/images/logo.svg" />
                                    </div>
                                    <div className="col-xs-1 col-sm-6"></div>
                                    <div className="col-xs-5 col-sm-2">
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
                                                <Login/>
                                                <SignInButton className="btn" onClick={this.onSignUp}>Sign Up</SignInButton>
                                            </div>
                                        }
                                        </SignInSection>
                                    </div>
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