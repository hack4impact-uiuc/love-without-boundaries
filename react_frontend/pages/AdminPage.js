import * as React from 'react';
import styled from 'styled-components';
import LessonForm from './../components/lessonform';

type Props = {
    /**/ 
  }

class AdminPage extends React.Component<Props>{

    render() {
        return (
            <div>I am an admin
                <LessonForm />
            </div>

        );
    }
}

export default AdminPage;