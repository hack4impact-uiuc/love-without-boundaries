import React from 'react';
import styled from 'styled-components';
import AddLesson from './../components/addlesson';
import NavBar from '../components/navBar';
import AdminList from '../components/adminList'

import { Grid, Col, Row, Image, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { graphql, QueryRenderer } from 'react-relay';
import StyledButton from '../components/button';
import StudentListItem from '../components/studentListItem'
import TeacherListItem from '../components/teacherListItem'
import environment from '../relay/environment';

type Props = {
    /**/
  }

  const Elem = styled.div`
      border: 1px solid #ddd;
      padding: 8px;
  `;

  const EvenElem = styled.div`
    background-color: #f2f2f2;
      border: 1px solid #ddd;
      padding: 8px;
      display: flex;

  `;
  const OddElem = styled.div`
      border: 1px solid #ddd;
      padding: 8px;
      margin:0px;
  `;

  const ChangeButton = styled.button`
      background-color: #4CAF50;
      border: 1px solid #ddd;
      padding: 10px;
      color: white;
      font-size: 20px;
      margin: 5px;
  `;

  let student = false
  let tutor = true

class AdminPage extends React.Component<Props>{
    constructor(props){
        super(props)
        this.state = {}
    }
    onClickMakeTutor(e) {
      this.setState({
        studentOrTutor: tutor
      })
    }

    onClickMakeStudent(e) {
      this.setState({
        studentOrTutor: student
      })
    }

    render() {
        return (
          <QueryRenderer
                  environment={environment}
                  query={graphql`
                      query AdminPage_Query{
                          students {
                              id
                              ...studentListItem_student
                          }
                          teachers {
                              id
                              ...teacherListItem_teacher
                          }
                      }
                  `}
                  variables={{}}
                  render={({ props }) => {
                      if (!props) {
                          return (
                              <div>Loading...</div>
                          );
                      }
                      return (
                          <div>
                              I am an admin
                                  <AddLesson/>
                                  <button onClick = {this.gotoQuiz}>Create Quiz</button>
                                <div>
                                <h2> View Tutors or Students</h2>
                                <ChangeButton onClick={this.onClickMakeStudent.bind(this)}> Students </ChangeButton>
                                <ChangeButton onClick={this.onClickMakeTutor.bind(this)}> Tutors </ChangeButton>
                                <div> {getList(props, this.state.studentOrTutor)} </div>
                                </div>
                          </div>
                      );
                  }}
              />




            // <div>I am an admin
            //     <AddLesson/>
            //     <button onClick = {this.gotoQuiz}>Create Quiz</button>
            //     <AdminList/>
            // </div>
            //{props.students.map(student => <StudentListItem key={student.id} student={student} />)}
            //{props.teachers.map(teacher => <TeacherListItem key={teacher.id} teacher={teacher} />)}
        );
    }
}


function EvenOddElem(elem, index) {
  if(index % 2 === 0){
    return <EvenElem> {elem} </EvenElem>
  }
  return <OddElem> {elem} </OddElem>
}

function getList(props, showStudentorTutor) {
    if (showStudentorTutor === student){
        return(
          <div>{props.students.map(student => <StudentListItem key={student.id} student={student} />)}</div>
            //<div>{studentList.map((item, index) => <ul key={item.id}>{EvenOddElem(item.value, index)} </ul>)}</div>
        )
    }
    else{
        return(
          <div>{props.teachers.map(teacher => <TeacherListItem key={teacher.id} teacher={teacher} />)}</div>
          //<div>{tutorList.map((item, index) => <ul key={item.id}>{EvenOddElem(item.value, index)} </ul>)}</div>
        )
    }
}

const studentList = [
  { id: 'chicken', value: 'Emileeee' },
  { id: 'shrek', value: 'Mical' },
  { id: 'leave', value: 'Shreyas is one with the nuggets' },
  { id: 'no', value: 'Teja hair' },
  { id: 'croissant', value: 'kiwi' },
  {
    id: 'memeless',
    value: 'memeless'
  }
]

const tutorList = [
  { id: 'shrek2', value: 'Timmeh' },
  { id: 'shrek3', value: 'Aria grande' },
  { id: 'shrek4', value: 'Alvin and the buttmunks' },
  { id: 'shrek5', value: 'megha_dum' },
  { id: 'shrek6', value: 'sniffles' },
  {
    id: 'shrek7',
    value: 'memeless and less'
  }
]

export default AdminPage;
