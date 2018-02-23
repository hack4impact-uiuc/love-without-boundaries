import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**/ 
}
const LessonDiv = styled.div`
    border-style: solid;
    border-color: red;
    height: 300px;
    width: 400px;
`;
class LessonComponent extends React.Component<Props>{
    render() {
        return(
            <LessonDiv>This is a lesson with buttons to notes, worksheets, quizzes</LessonDiv>
        );
    }

}

export default LessonComponent;

Tim likes cock