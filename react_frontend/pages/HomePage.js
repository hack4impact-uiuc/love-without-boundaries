import * as React from 'react';
import styled from 'styled-components';
import StyledButton from '../components/button';
import { Button, Grid, Jumbotron,  } from 'react-bootstrap';

type Props = {
    /**/ 
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
`
const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

const buttonsInstance = (
  <div className="well" style={wellStyles}>
    <Button bsStyle="primary" bsSize="large" block>
      Block level button
    </Button>
    <Button bsSize="large" block>
      Block level button
    </Button>
  </div>
);
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
                <Jumbotron>
                    <h1>Love Without Boundaries Education Portal</h1>
                    <p>
                        This is an educational tool used to help students in Cambodia
                        study for the national english exam.
                    </p>
                    <p>
                        <Button bsStyle="primary">Learn more</Button>
                    </p>
                </Jumbotron>

                <HomeSection className="container">
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
            </div>
        );
    }
}

export default HomePage;