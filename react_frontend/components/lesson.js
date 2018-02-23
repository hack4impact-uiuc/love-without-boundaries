import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**/ 
}
const LessonTitle = styled.div`
    border-style: solid;
    border-color: red;
    color: white;
    font-size: 30px;
    background-color: #969ba3;
    height: 200px;
    width: 400px;
    z-index: -1;
`;
const LessonProps = styled.div`
    font-size: 20px;
    color: white;
    z-index: 1;
`;
const checkedBoxComplete = styled.div`
    border-style: solid;
    border-color: red;
    color: white;
    font-size: 30px;
    background-color: #969ba3;
    height: 10px;
    width: 400px;
    z-index: -1;
`;
const checkedBoxInComplete = styled.div`
    border-style: solid;
    border-color: red;
    height: 15px;
    width: 15px;
    background-color: red;
`;
class LessonComponent extends React.Component<Props>{
    render() {
        return(
            <div>
            <LessonTitle>{this.props.lessonName}
            <LessonProps>Notes: {this.props.lessonNotes}</LessonProps>
            <LessonProps>Worksheet: {this.props.worksheetName}</LessonProps>
            <LessonProps>Quiz: {this.props.quizName}, Grade: {this.props.quizPercentage}, Completed: {this.props.quizIsChecked} </LessonProps>
            {/* {isChecked(this.props)} */}
            </LessonTitle>
            </div>
        );
    }

}

function isChecked(props) {
    if (props.quizIsChecked){
        return(
            <checkedBoxComplete></checkedBoxComplete>
        )
    }
    else{
        return(
            <checkedBoxComplete></checkedBoxComplete>
        )
    }
}

export default LessonComponent;