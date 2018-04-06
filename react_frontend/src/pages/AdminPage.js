import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/navBar';

import { Grid, Col, Row, Image, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { graphql, QueryRenderer, commitMutation } from 'react-relay';
import type { Environment } from 'relay-runtime';

import LessonForm from './../components/lessonform'
import LessonList from './../components/LessonList'
import StudentListItem from './../components/studentListItem'
import TeacherListItem from './../components/teacherListItem'
import AdminListComponent from './../components/adminList'
import environment from '../relay/environment';
import { withRouter } from 'react-router-dom';


type Props = {
    /**/
  }

class AdminPage extends React.Component<Props>{
  constructor(props){
      super(props)
      this.state = {}
  }

  render() {
      return (
          <div>I am an admin
              <LessonForm/>
              <button onClick = {this.gotoQuiz}>Create Quiz</button>
              <LessonList/>
              <AdminListComponent/>
          </div>
      );
  }
}

export default AdminPage;
