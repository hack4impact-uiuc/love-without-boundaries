import * as React from 'react';
import styled from 'styled-components';
import { graphql, QueryRenderer } from 'react-relay';

import StyledButton from '../components/button';
import StudentListItem from '../components/studentListItem'
import { Button, Grid } from 'react-bootstrap';

import environment from '../relay/environment';

type Props = {
    /* */ 
}
const HomeSection = styled.div`
    // background: url("https://file-bbzuvotrbb.now.sh/") no-repeat center center fixed;   
    // background: #ffffff;
    width: 100%;
    height: 5000px;
    display: block;
`

const SignInSection = styled.div`
    border-style: solid;
    height: 200px;
    padding: 20px;
    width: 400px;
    float:right;
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
                        if (!props) {
                            return (
                                <div>Loading...</div>
                            );
                        }
                        return (
                            <HomeSection className="container">
                                <h2>Students</h2>
                                {props.students.map(student => <StudentListItem key={student.id} student={student} />)}
                                { 
                                    this.state.signup ? 
                                    <SignInSection>
                                        <p>Are you a...</p>
                                        <Button bsStyle="primary">Student</Button>
                                        <Button bsStyle="primary">Teacher</Button>
                                        <Button bsStyle="primary">Admin</Button>
                                    </SignInSection>
                                    : 
                                    <SignInSection>
                                        <Button bsStyle="primary">Login</Button>
                                        <Button bsStyle="primary" onClick={this.onSignUp}>Sign Up</Button>
                                    </SignInSection>
                                }
                            </HomeSection>
                        );
                    }}
                />
        );
    }
}

export default HomePage;