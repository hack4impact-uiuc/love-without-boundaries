import React from 'react';
import styled from 'styled-components';
import AddLesson from './../components/addlesson';
// import LessonForm from './../components/lessonform';
import NavBar from '../components/navBar';
type Props = {
    /**/ 
  }

class AdminPage extends React.Component<Props>{

    render() {
        return (
            <div>I am an admin
                <AddLesson style="float:right;"/>
            </div>

        );
    }
}

export default AdminPage;