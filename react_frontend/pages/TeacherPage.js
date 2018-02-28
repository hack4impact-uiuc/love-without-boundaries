import * as React from 'react';
import styled from 'styled-components';
import Lesson from './../components/lesson';

type Props = {
    /**/
  }

class TeacherPage extends React.Component<Props>{

    render() {
        return (
            <div>I am a teacher page
              <Lesson lessonName = {"Lesson 1"}
                      lessonNotes = {"Nouns"}
                      worksheetName = {"Worksheet 1"}
                      worksheetIsChecked = {true}
                      quizName = {"Nouns"}
                      quizIsChecked = {true}
                      quizPercentage = {'98%'}
              >This is sample lesson Nouns</Lesson>
            </div>
        );
    }
}

export default TeacherPage;
