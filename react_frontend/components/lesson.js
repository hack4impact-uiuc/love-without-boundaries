import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**/
}

class LessonComponent extends React.Component<Props>{
    render() {
        return(
            <div>
            <LessonBox>
              <LessonTitle> {this.props.lessonName}</LessonTitle>
              <LessonProps> Notes: {this.props.lessonNotes}</LessonProps>
              <LessonProps> Worksheet: {this.props.worksheetName}</LessonProps>
              <LessonProps> Quiz: {this.props.quizName} </LessonProps>
            </LessonBox>
            </div>
        );
    }

}

export default LessonComponent;