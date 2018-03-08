import * as React from 'react';
import styled from 'styled-components';


class Question extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            question: this.props.question,
            a: this.props.a,
            b: this.props.b,
            c: this.props.c,
            d: this.props.d,
            correct: ""
        }
    }
    update1 = event => {
        this.setState({opt1 : event.target.value})
    }
    update2 = event => {
        this.setState({opt2 : event.target.value})
    }
    update3 = event => {
        this.setState({opt3 : event.target.value})
    }
    update3 = event => {
        this.setState({opt4 : event.target.value})
    }
    correct1 = event => {
        this.setState({opt1val : true})
    }
    correct2 = event => {
        this.setState({opt2val : true})
    }
    correct3 = event => {
        this.setState({opt3val : true})
    }
    correct4 = event => {
        this.setState({opt4val : true})
    }
    render() {
        return(
            <div>
                {name}
                <br/>
                {opt1}
                <br/>
                {opt2}
                <br/>
                {opt3}
                <br/>
                {opt4}
                <br/>
                <form>
                    <label>
                        Option 1:
                        <input
                        type="text"
                        onChange={this.update1}
                        />
                    </label>
                    <button type="button" onClick={this.correct1}>
                        Correct
                    </button>
                </form>
                <br />
                <form>
                    <label>
                        Option 2:
                        <input
                        type="text"
                        onChange={this.update2}
                        />
                    </label>
                    <button type="button" onClick={this.correct2}>
                        Correct
                    </button>
                </form>
                <br />
                <form>
                    <label>
                        Option 3:
                        <input
                        type="text"
                        onChange={this.update3}
                        />
                    </label>
                    <button type="button" onClick={this.correct3}>
                        Correct
                    </button>
                </form>
                <br />
                <form>
                    <label>
                        Option 4:
                        <input
                        type="text"
                        onChange={this.update4}
                        />
                    </label>
                    <button type="button" onClick={this.correct4}>
                        Correct
                    </button>
                </form>
                <br />
            </div>
        );
    }

}

export default Question;