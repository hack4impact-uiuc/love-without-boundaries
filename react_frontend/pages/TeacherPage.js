import * as React from 'react';
import styled from 'styled-components';
import AddLessonForm from './../components/lessonform';


class TeacherPage extends React.Component<Props>{

    render() {
        return (
            <div>I am a teacher
                <AddLessonForm> </AddLessonForm>
            </div>
        );
    }
}

export default TeacherPage;