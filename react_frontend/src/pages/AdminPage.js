import React from 'react';
import styled from 'styled-components';
import AddLesson from './../components/addlesson';
import NavBar from '../components/navBar';
import AdminList from '../components/adminList'

import { Grid, Col, Row, Image, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { graphql, QueryRenderer, commitMutation } from 'react-relay';
import type { Environment } from 'relay-runtime';

import StyledButton from '../components/button';
import StudentListItem from '../components/studentListItem'
import TeacherListItem from '../components/teacherListItem'
import environment from '../relay/environment';
import assignStudentToTeacher from '../relay/mutations/assignStudentToTeacher'

type Props = {
    /**/
  }


  const EvenElem = styled.div`
    background-color: #f2f2f2;
      border: 1px solid #ddd;
      padding: 8px;
      padding-left: 30px;
      margin-left:20px;
      width: 50%;
  `;
  const OddElem = styled.div`
      border: 1px solid #ddd;
      padding: 8px;
      padding-left: 30px;
      margin-left:20px;
      width: 50%;
  `;

  const ChangeButton = styled.button`
      background-color: #4CAF50;
      border: 1px solid #ddd;
      padding: 10px;
      color: white;
      font-size: 20px;
      margin: 20px;
  `;

  const DeleteButton = styled.button`
      background-color: red;
      border: 1px solid #ddd;
      padding: 8px;
      color: white;
      font-size: 12px;
      margin-left: 50%;
  `;

  const AssignButton = styled.button`
      background-color: blue;
      border: 1px solid #ddd;
      padding: 8px;
      color: white;
      font-size: 12px;
      margin-left: 5px;
  `;

  const AssignTeacherButton = styled.button`
      background-color: blue;
      border: 1px solid #ddd;
      color: white;
      font-size: 12px;
      border: 1px solid #ddd;
      padding: 10px;
      padding-left: 10px;
      margin-left: 5px;
      padding-right: 25px;
  `;

  const PopUpList = styled.div`
      position: fixed;
      background-color: white;
      left: 80%;
      top:50%;
  `;

  const TeacherElem = styled.div`
      background-color: #f2f2f2;
      border: 1px solid #ddd;
      padding: 10px;
      padding-left: 0px;
      margin-left: 5px;
      padding-right: 25px;
  `;

  let student = false
  let tutor = true

class AdminPage extends React.Component<Props>{
    constructor(props){
        super(props)
        this.state = {
          studentOrTutor: tutor,
          showAssignList: false,
          selectedTeacherId: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      const id = target.value;
      this.setState({
        selectedTeacherId: id
      }, function () {
        console.log(this.state.selectedTeacherId);
      });
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

    onClickShowAssignList(e) {
      if(this.state.showAssignList === true){
        this.setState({
            showAssignList: false
        }, function () {
          console.log(this.state.showAssignList);
        });
      }else{
        this.setState({
          showAssignList:true,
          selectedStudentId: e.target.name
        }, function () {
          console.log(this.state.showAssignList);
        });
      }

    }


    assignStudentToTeachers = (e) => {
        console.log("Assigning Student to Tutor " + this.state.selectedTeacherId + " studentId: " + this.state.selectedStudentId);
        this.setState({
            showAssignList: false
        }, function () {
          const studentID = this.state.selectedStudentId;
          const teacherID = this.state.selectedTeacherId;
          assignStudentToTeacher(environment, studentID, teacherID);
        });
    }

    EvenOddElem(elem, index, isTeacher,student) {
      if(isTeacher === true){
        if(index % 2 === 0){
          return <EvenElem> {elem} <DeleteButton> Delete </DeleteButton>  </EvenElem>
        }
        return <OddElem> {elem} <DeleteButton> Delete </DeleteButton>  </OddElem>
      }
      if(index % 2 === 0){
        return <EvenElem> {elem} <DeleteButton> Delete </DeleteButton> <AssignButton name={student.id} onClick = {this.onClickShowAssignList.bind(this)} > Assign </AssignButton>  </EvenElem>
      }
      return <OddElem> {elem} <DeleteButton> Delete </DeleteButton> <AssignButton name={student.id} onClick = {this.onClickShowAssignList.bind(this)} > Assign </AssignButton> </OddElem>
    }

    getList(props, showStudentorTutor) {
        if (showStudentorTutor === student){
            return(
               <div>{props.students.map( (student, index) =>  this.EvenOddElem(<StudentListItem key={student.id} student={student} />, index, false, student) )} </div>
            )
        }
        else{
            return(
              <div>{props.teachers.map( (teacher, index) => this.EvenOddElem(<TeacherListItem key={teacher.id} teacher={teacher} />, index, true, student)  )} </div>
            )
        }
    }

    getPopList(props, showList) {
        if (showList === true){
            return(
              <PopUpList>{props.teachers.map((teacher) => <TeacherElem><ul id={teacher.id} > <input type="checkbox" value={teacher.id} onChange={this.handleInputChange}/>  {teacher.name} </ul></TeacherElem>)}
               <AssignTeacherButton onClick={this.assignStudentToTeachers}> Assign to Teacher </AssignTeacherButton></PopUpList>
          )
        }

    }

    render() {
        return (
          <QueryRenderer
                  environment={environment}
                  query={graphql`
                      query AdminPage_Query{
                          students {
                              id
                              name
                              ...studentListItem_student
                          }
                          teachers {
                              name
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
                      const teacherList = props.teachers.map((teacher) => <TeacherElem><ul id={teacher.id} > <input type="checkbox" value={teacher.id} onChange={this.handleInputChange}/>  {teacher.name} </ul></TeacherElem>)

                      return (
                          <div>
                              I am an admin
                                  <AddLesson/>
                                  <button onClick = {this.gotoQuiz}>Create Quiz</button>
                                <div>
                                <h2> View Tutors or Students</h2>
                                <ChangeButton onClick={this.onClickMakeStudent.bind(this)}> Students </ChangeButton>
                                <ChangeButton onClick={this.onClickMakeTutor.bind(this)}> Tutors </ChangeButton>
                                <div> {this.getList(props, this.state.studentOrTutor)} </div>
                                <div> {this.getPopList(props, this.state.showAssignList)}</div>
                                </div>
                          </div>
                      );
                  }}
              />
        );
    }
}

// function showsearch() {
//   return <div><input style = "hidden:none" id = "myDIV" type="text" placeholder="search here"/></div>
// }

function myFunction() {
    var x = {teacherList};
    if ( x && x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


// function EvenOddElem(elem, index, isTeacher) {
//   if(isTeacher === true){
//     if(index % 2 === 0){
//       return <EvenElem> {elem} <DeleteButton> Delete </DeleteButton>  </EvenElem>
//     }
//     return <OddElem> {elem} <DeleteButton> Delete </DeleteButton>  </OddElem>
//   }
//   if(index % 2 === 0){
//     return <EvenElem> {elem} <DeleteButton> Delete </DeleteButton> <AssignButton onClick = {myFunction()} > Assign </AssignButton>  </EvenElem>
//   }
//   return <OddElem> {elem} <DeleteButton> Delete </DeleteButton> <AssignButton onClick = {myFunction()} > Assign </AssignButton> </OddElem>
// }
//
// function getList(props, showStudentorTutor) {
//     if (showStudentorTutor === student){
//         return(
//            <div>{props.students.map( (student, index) =>  EvenOddElem(<StudentListItem key={student.id} student={student} />, index, false) )} </div>
//         )
//     }
//     else{
//         return(
//           <div>{props.teachers.map( (teacher, index) => EvenOddElem(<TeacherListItem key={teacher.id} teacher={teacher} />, index, true)  )} </div>
//         )
//     }
// }

function makeTeacherList(props) {
  const teachers = props.teachers
  const teacherList = teachers.map((teacher) => <li id={teacher.id}>{teacher}</li>)
  return <ul>{teacherList}</ul>
}
function makeStudentList(props) {
  const students = props.students
  const studentList = students.map((students) => <li id={student.id}>{student}</li>)
  return <ul>{studentList}</ul>
}

// const teacherList = props.teachers.map((teacher) => <li>{teacher}</li>
// const studentList = props.students.map((student) => <li>{student}</li>

// let teacherList = makeTeacherList(props)
// let studentList = makeTeacherList(props)

// <makeTeacherList teachers={props.teachers} />,
//     document.getElementById('root')


export default AdminPage;
