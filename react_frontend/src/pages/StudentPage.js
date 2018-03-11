import React from 'react';
import styled from 'styled-components';
import Lesson from './../components/lesson';
import NavBar from '../components/navBar';

type Props = {
    /**/ 
  }

class StudentPage extends React.Component<Props>{

    render() {
        return (
            <div>
                <NavBar />
                I am a StudentPage
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

export default StudentPage;