import React, {Component} from 'react';
import styled from 'styled-components';
import Answer from '../components/answer';
import StyledButton from '../components/button';
const CopiedButton = styled.button`
    background-color: #4CAF50;
    border: 1px solid #ddd;
    padding: 10px;
    color: white;
    font-size: 15px;
    margin: 5px;
`;

class Question extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : "",
            locked : this.props.locked
        }
    }
    componentWillReceiveProps(newProps) {
        this.setState({locked : newProps.locked})
    }
    updateQuestion = event => {
        this.setState({name : event.target.value})
    }
    unlock = () => {
        this.props.passBack(this.props.num);
    }
    /*edit = () => {
        this.setState({locked : false})
    }
    lock = () => {
        this.setState({locked : true})
    }*/
    render() {
        return(
            <div>
                {Number(this.props.num) + 1}. 
                <input type="text" onChange={this.updateQuestion} readOnly={this.state.locked}/>
                <CopiedButton onClick={this.unlock}>Edit</CopiedButton>
                
                <Answer letter="A" locked={this.state.locked} />
                <Answer letter="B" locked={this.state.locked} />
                <Answer letter="C" locked={this.state.locked} />
                <Answer letter="D" locked={this.state.locked} />
            </div>
        );
    }

}

export default Question;