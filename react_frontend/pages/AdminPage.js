import * as React from 'react';
import styled from 'styled-components';
import LessonForm from './../components/lessonform';
import NavBar from '../components/navBar';

type Props = {
    /**/ 
  }

class AdminPage extends React.Component<Props>{

    render() {
        return (
            <div>
                <NavBar />
                I am an admin
                <LessonForm />
            </div>

        );
    }
}

export default AdminPage;