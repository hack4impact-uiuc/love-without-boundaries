import * as React from 'react';
import styled from 'styled-components';
import LessonForm from './../components/lessonform';


class TeacherPage extends React.Component<Props>{

    render() {
        return (
            <div>I am a teacher
                <LessonForm> </LessonForm>
            </div>
        );
    }
}

export default TeacherPage;