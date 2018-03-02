import * as React from 'react';
import styled from 'styled-components';
import StyledButton from '../components/button'
type Props = {
    /**/ 
  }
const homeSection = styled.div`
    background: url("https://file-bbzuvotrbb.now.sh/") no-repeat center center fixed;
    background: #000000;
    width: 100%;
    height: 100%;
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
            <div>
                <homeSection>
                { 
                    this.state.signup ? 
                    <TempDiv>
                        <p>Are you a...</p>
                        <LoginBtns className="btn">Student</LoginBtns>
                        <LoginBtns className="btn">Teacher</LoginBtns>
                        <LoginBtns className="btn">Admin</LoginBtns>
                    </TempDiv>
                    : 
                    <TempDiv>
                        <LoginBtns className="btn">Login</LoginBtns>
                        <LoginBtns className="btn" onClick={this.onSignUp}>Sign Up</LoginBtns>
                    </TempDiv>
                }
                </homeSection>
            </div>
        );
    }
}

export default HomePage;