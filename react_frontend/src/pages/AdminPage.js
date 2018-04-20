import React from 'react';
import styled from 'styled-components';

import { Link } from "react-router-dom";
import { graphql, QueryRenderer, commitMutation } from 'react-relay';
import type { Environment } from 'relay-runtime';

import LessonForm from './../components/lessonform';
import LessonList from './../components/lessonList';
import StudentListItem from './../components/studentListItem';
import TeacherListItem from './../components/teacherListItem';
import AdminListComponent from './../components/adminList';
import environment from '../relay/environment';
import { withRouter } from 'react-router-dom';
import PaddedButton from './../components/button';

type Props = {
    /**/
  }

class AdminPage extends React.Component<Props>{
    constructor(props) {
        super(props);
        this.state = {
            showLesson: false
        }
    }
    goToQuiz = () => {this.props.history.push('/quiz')}
    goToLessonForm = () => {this.setState({showLesson: true})}
    goToList = () => {this.setState({showLesson: false})}
    render() {
        return (
            <div className="container-fluid">
                
                <div className="row">
                    <div className="col-sm-9">
                    {
                        this.state.showLesson ? 
                        <div>
                            <LessonForm/> 
                            <LessonList/>
                        </div>
                        :
                        <AdminListComponent/>
                    }
                    </div>
                    <div className="col-sm-3">
                        <PaddedButton style={{display:'block'}} className="btn btn-primary" onClick={this.goToLessonForm}>Edit Lessons</PaddedButton>
                        <PaddedButton style={{display:'block'}} className="btn btn-primary" onClick = {this.goToQuiz}>Create Quiz</PaddedButton>
                        <PaddedButton style={{display:'block'}} className="btn btn-primary" onClick = {this.goToList}>View Tutors and Students</PaddedButton>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminPage;