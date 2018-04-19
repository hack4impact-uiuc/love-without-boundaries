import React from 'react';
import styled from 'styled-components';
import './../../assets/Hover.css';
import { withRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

type Props = {
  /**/
}


const LessonBox = styled.div`
    color: white;
    background-color: #a6acb5;
    height: 30%;
    width: 50%;
    z-index: -1;
    margin: auto;
    border-radius: 0px 40px;
    align: center;
`;

const LessonTitle = styled.div`
    border-bottom-style: solid;
    border-color: white;
    color: white;
    padding: 10px;
    font-size: 35px;
    text-align: right;
    z-index = -1;
    margin: 20px;
`;

const LessonProps = styled.div`
    border-style: solid;
    border-color: white;
    color: #337ab7;
    padding: 5px 5px;
    margin: 5px 5px;
    font-size: 20px;
    text-align: center;
    border-radius: 0px;
    background-color: white;
    height: 50px;
    z-index: -1;
    border-radius: 0px 30px;

`;

const CheckedBoxComplete = styled.div`
    display: inline-block;
    margin-left: 3px;
    margin-bottom: 1px;
    border-style: solid;
    border-color: green;
    color: white;
    font-size: 30px;
    background-color: green;
    height: 25px;
    width: 25px;
    z-index: 100;
`;

const CheckedBoxInComplete = styled.div`
    float: right;
    float:top;
    border-style: solid;
    border-color: red;
    height: 25px;
    width: 25px;
    background-color: red;
    z-index: 100;
`;

const SlightlyPaddedButton = styled.button`
    margin: 0px 5px;
`

class LessonComponent extends React.Component<Props>{

    gotoQuiz = () => {this.props.history.push('/takequiz')}
    gotoPastQuiz = () => {this.props.history.push('/reviewquiz')}
    render() {
        let quiz = "Take Quiz"
        let box = <CheckedBoxInComplete/>
        if (this.props.quizIsChecked) {
            quiz = "Review Quiz"
            box = <CheckedBoxComplete/>
        }
        return(
            <div>
                <LessonBox className="lessonBox" >
                    <LessonTitle >{this.props.lessonName}</LessonTitle>
                    <LessonProps> <a href={this.props.lessonNotesLink}>Notes {this.props.lessonNotes}</a></LessonProps>
                    <LessonProps> <a href={this.props.lessonWorksheetLink}>Worksheet {this.props.worksheetName}</a></LessonProps>
                    <LessonProps> Quiz -- {this.props.quizName} Grade: {this.props.quizPercentage}     
                       {this.props.isTeacher &&  (
                        <Link key={this.props.key} to={{ pathname: '/takequiz', state:{ lessonID: this.props.id } }}>
                        <SlightlyPaddedButton className="btn btn-primary" onClick={this.gotoPastQuiz} bsStyle="primary"> Take Quiz </SlightlyPaddedButton>
                        </Link>
                    )}
                         
                        <SlightlyPaddedButton className="btn btn-primary" onClick={this.gotoPastQuiz}> Review </SlightlyPaddedButton> 
                    </LessonProps>
                </LessonBox>
            </div>
        );
    }

}

export default withRouter(LessonComponent);
