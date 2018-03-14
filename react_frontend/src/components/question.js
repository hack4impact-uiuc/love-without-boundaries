import React, {Component} from 'react';
import styled from 'styled-components';
import Answer from '../components/answer'

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
    /*edit = () => {
        this.setState({locked : false})
    }
    lock = () => {
        this.setState({locked : true})
    }*/
    render() {
        return(
            <div>
                <input type="text" onChange={this.updateQuestion} readOnly={this.state.locked} />?
                <Answer letter="A" locked={this.state.locked} />
                <Answer letter="B" locked={this.state.locked} />
                <Answer letter="C" locked={this.state.locked} />
                <Answer letter="D" locked={this.state.locked} />
                {/*<button onClick = {this.edit}>Edit</button>
                <button onClick = {this.lock}>Submit</button>*/}
            </div>
        );
    }

}

export default Question;