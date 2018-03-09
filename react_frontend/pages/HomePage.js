import React from 'react';
import styled from 'styled-components';
import StyledButton from '../components/button';
import { Grid, Col, Row, Image } from 'react-bootstrap';

type Props = {
    /**/ 
}
const HomeSection = styled.div`
    background: url("https://file-xvqjcpzhcj.now.sh");
    background-size: cover;  
    width: 100%;
    height: 680px;
    display: block;
`

const SignInSection = styled.div`
    text-align: center;
    padding-top: 380px;
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
    render() {
        return (
            <HomeSection className="container">
                <LogoRow className="row">
                    <Col xs={5} sm={4} style={{paddingLeft: 15}}>
                        <Image src="https://www.lovewithoutboundaries.com/sites/lwb3/templates/default/images/logo.svg" responsive />
                    </Col>
                    <Col xs={1} sm={6}></Col>
                </LogoRow>
                
                <Row>
                    <Col xs={0} sm={4}></Col>
                    <Col xs={12} sm={4}>
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
                            <SignInButton className="btn">Login</SignInButton>
                            <SignInButton className="btn" onClick={this.onSignUp}>Sign Up</SignInButton>
                            </div>
                        }
                        </SignInSection>
                    </Col>
                </Row>
                
            </HomeSection>
        );
    }
}

export default HomePage;