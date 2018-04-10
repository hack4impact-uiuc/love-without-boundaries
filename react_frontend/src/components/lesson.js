import React from 'react';
import styled from 'styled-components';
import {Button} from 'react-bootstrap';

type Props = {
  /**/
}


const LessonBox = styled.div`
    color: white;
    background-color: #a6acb5;
    height: 30%;
    width: 50%;
    z-index: -1;
    font-family: "Arial";
    margin: 10px;
    border-radius: 25px;
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
    font-family: "Arial";
`;

const LessonProps = styled.div`
    border-style: solid;
    border-color: white;
    color: #a6acb5;
    padding: 5px 5px;
    margin: 5px 5px;
    font-size: 20px;
    text-align: center;
    border-radius: 0px;
    background-color: white;
    height: 50px;
    z-index: -1;
    font-family: "Arial";
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


class LessonComponent extends React.Component<Props>{
    render() {
        let quiz = "Take Quiz"
        let box = <CheckedBoxInComplete/>
        if (this.props.quizIsChecked) {
            quiz = "Review Quiz"
            box = <CheckedBoxComplete/>
        }
        return(
            <div>
                <LessonBox>
                    <LessonTitle>{this.props.lessonName}</LessonTitle>
                    <LessonProps> <a href={this.props.lessonNotesLink}>Notes: {this.props.lessonNotes}</a></LessonProps>
                    <LessonProps> <a href={this.props.lessonWkshtLink}>Worksheet: {this.props.worksheetName}</a></LessonProps>
                    <LessonProps> Quiz: {this.props.quizName} Grade: {this.props.quizPercentage} <Button bsStyle="primary">{quiz}</Button> </LessonProps>;
                </LessonBox>
            </div>
        );
    }

}

export default LessonComponent;
