import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Quiz from '../components/quiz';
import environment from '../relay/environment';
import submitQuiz from '../relay/mutations/submitQuiz';
import { graphql, QueryRenderer } from 'react-relay';

const CopiedButton = styled.button`
    background-color: #4CAF50;
    border: 1px solid #ddd;
    padding: 10px;
    color: white;
    font-size: 15px;
    margin: 5px;
`;

class TakeQuizPage extends Component {
    constructor(props) {
        super(props);
        this.lessonID = 'TGVzc29uOjVhY2E5YTJjMGM2Yzc1N2M0OGQ1ZmY1Yg==';
        this.state = { qNum: 0, qMap: [] };
    }
    // finish = () => {this.props.history.push('/student');}
    render() {
        return (
            <QueryRenderer
                environment ={environment}
                query={graphql`
                    query StudentPage_Query{
                        lessons{
                            name
                            worksheetName
                            worksheetURL
                            notesName
                            notesURL
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
                        <div>
                            <h1>Quiz 1</h1>
                            <Quiz />
                            <p> </p>

                            <CopiedButton onClick={() => submitQuiz(environment, 'U3R1ZGVudDo1YWQwMWM5YWZkODFiNjg3YWYwYmM1NWQ=', 'TGVzc29uOjVhY2E5YTJjMGM2Yzc1N2M0OGQ1ZmY1Yg==', ['5aced58421b8333d77e8e339'], ['4'])}>Submit</CopiedButton>
                        </div>
                    );
                }}
            />
        );
    }
}


export default withRouter(TakeQuizPage);
