import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**/
}

const LessonBox = styled.div`
    border-style: solid;
    border-color: #d7dce2;
    color: white;
    background-color: #a6acb5;
    height: 300px;
    width: 500px;
    z-index: -1;
    font-family: "Arial";
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
      height: 30px;
      z-index: -1;
      font-family: "Arial";
`;
const CheckedBoxComplete = styled.div`
    display: inline-block;
    margin-left: 3px;
    margin-bottom: 1px;
    border-style: solid;
    border-color: red;
    color: white;
    font-size: 30px;
    background-color: red;
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
    background-color: white;
    z-index: 100;
`;

class LessonComponent extends React.Component<Props>{
    render() {
        return(
            <div>
            <LessonBox>
              <LessonTitle>{this.props.lessonName}</LessonTitle>
              <LessonProps> Notes: {this.props.lessonNotes}</LessonProps>
              <LessonProps> Worksheet: {this.props.worksheetName}</LessonProps>
              <LessonProps> Quiz: {this.props.quizName} </LessonProps>
            </LessonBox>
            </div>
        );
    }

}

export default LessonComponent;