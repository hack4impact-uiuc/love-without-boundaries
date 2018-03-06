import * as React from 'react';
import styled from 'styled-components';
import LessonForm from './../components/lessonform';
import Lesson from './../components/lesson';

import AddTodo from '../containers/AddTodo'



type Props = {
    /**/
}

const TeacherAddLessonBox = styled.div`
    color: white;
    font-size: 25px;
    text-align: center;
    float:right;
    margin: 20px;
    background-color: #a6acb5;
    height: 400px;
    width: 800px;
    z-index: -1;
    font-family: "Arial";
`;

const TeacherTitle = styled.div`
    border-bottom-style: solid;
    border-color: white;
    color: white;
    padding: 10px;
    font-size: 25px;
    text-align: center;
    margin: 20px;
    font-family: "Arial";
`;

const TeacherButton = styled.div`
    display: inline-block;
    border-style: solid;
    border-color: white;
    color: #a6acb5;
    padding: 15px 15px;
    margin: 5px 5px;
    font-size: 20px;
    text-align: center;
    border-radius: 15px;
    background-color: white;
    height: 40px;
    z-index: -1;
    font-family: "Arial";
`;

class TeacherPage extends React.Component<Props>{

    render() {
        return (
            <div>I am a teacher yo
                <AddTodo />
            </div>
        );
    }
}

export default TeacherPage;
