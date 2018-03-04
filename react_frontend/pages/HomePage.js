import * as React from 'react';
import styled from 'styled-components';
import StyledButton from '../components/button';
import { Button, Grid } from 'react-bootstrap';
type Props = {
    /**/ 
}
const HomeSection = styled.div`
    background: url("https://file-bbzuvotrbb.now.sh/") no-repeat center center fixed;   
    // background: #000000;
    width: 100%;
    height: 5000px;
    display: block;
`
const LoginBtns = styled.button`
    padding: 10px;
    color: white;
    float: right;
    background-color: #3472b5;
    margin: 10px;
`
const TempDiv = styled.div`
    border-style: solid;
    border-color: red;
    height: 300px;
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
            <HomeSection className="container">
                { 
                    this.state.signup ? 
                    <TempDiv>
                        <p>Are you a...</p>
                        <Button bsStyle="primary">Student</Button>
                        <Button bsStyle="primary">Teacher</Button>
                        <Button bsStyle="primary">Admin</Button>
                    </TempDiv>
                    : 
                    <TempDiv>
                        <Button bsStyle="primary">Login</Button>
                        <Button bsStyle="primary" onClick={this.onSignUp}>Sign Up</Button>
                    </TempDiv>
                }
            </HomeSection>
        );
    }
}

export default HomePage;