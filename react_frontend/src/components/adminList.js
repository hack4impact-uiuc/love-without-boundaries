import React from 'react';
import styled from 'styled-components';

import { Link } from "react-router-dom";
import { graphql, QueryRenderer, commitMutation } from 'react-relay';
import type { Environment } from 'relay-runtime';

import environment from './../relay/environment';
import assignStudentToTeacher from './../relay/mutations/assignStudentToTeacher';
import deleteStudent from './../relay/mutations/deleteStudent';
import deleteTeacher from './../relay/mutations/deleteTeacher';
import { withRouter } from 'react-router-dom';

import StudentListItem from './../components/studentListItem';
import TeacherListItem from './../components/teacherListItem';
import PaddedButton from './../components/button';
type Props = {
  /**/
}

export const EvenElem = styled.div`
  background-color: #f2f2f2;
    border: 1px solid #ddd;
    padding: 8px;
    padding-left: 30px;
    margin-left:20px;
`;
export const OddElem = styled.div`
    border: 1px solid #ddd;
    padding: 8px;
    padding-left: 30px;
    margin-left:20px;
    
`;

export const DeleteButton = styled.button`
    padding: 8px;
    color: white;
    font-size: 12px;
    margin-left: 50%;
    margin-bottom:10px;
    margin-top: 2%;
    display: inline;
`;

export const AssignButton = styled.button`
    padding: 8px;
    color: white;
    font-size: 12px;
    margin-left: 5px;
    display: inline;
`;

export const AssignTeacherButton = styled.button`
    color: white;
    font-size: 12px;
    padding: 10px;
    padding-left: 10px;
    margin-left: 5px;
    padding-right: 25px;
`;

export const PopUpList = styled.div`
    position: fixed;
    background-color: white;
    left: 80%;
    top:60%;
`;

export const TeacherElem = styled.div`
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    padding: 10px;
    padding-left: 0px;
    margin-left: 5px;
    padding-right: 25px;
`;

let student = "STUDENT"
let tutor = "TUTOR"
class AdminListComponent extends React.Component<Props>{    constructor(props){
        super(props)
        this.state = {
          studentOrTutor: tutor,
          showAssignList: false,
          selectedTeacherId: ''
        }
    }

    handleInputChange= (event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      const id = target.value;
      this.setState({
        selectedTeacherId: id
      }, function () {
      });
    }

    onClickMake = (e) => {
      this.setState({
        studentOrTutor: e.target.name
      })
    }

    onClickShowAssignList = (e) => {
      if(this.state.showAssignList === true){
        this.setState({
            showAssignList: false
        }, function () {
        });
      }else{
        this.setState({
          showAssignList:true,
          selectedStudentId: e.target.name
        }, function () {
        });
      }
    }

    assignStudentToTeachers = (e) => {
        this.setState({
            showAssignList: false
        }, function () {
          const studentID = this.state.selectedStudentId;
          const teacherID = this.state.selectedTeacherId;
          assignStudentToTeacher(environment, studentID, teacherID);
        });
    }

    onClickDeleteStudent = (e) => {
        const deleteStudentId = e.target.name;
        deleteStudent(environment, deleteStudentId);
        window.location.reload();
    }

    onClickDeleteTeacher = (e) => {
        const deleteTeacherId = e.target.name;
        deleteTeacher(environment, deleteTeacherId);
        window.location.reload();
    }

    EvenOddElem(elem, index, isTeacher, student) {
      if(isTeacher === true){
        if(index % 2 === 0){
          return <EvenElem> {elem} <DeleteButton className="btn btn-danger" name={student.id} onClick = {this.onClickDeleteTeacher}> Delete </DeleteButton>  </EvenElem>
        }
        return <OddElem> {elem} <DeleteButton className="btn btn-danger" name={student.id} onClick = {this.onClickDeleteTeacher}> Delete </DeleteButton>  </OddElem>
      }
      if(index % 2 === 0){
        return <EvenElem> {elem} <DeleteButton className="btn btn-danger" name={student.id} onClick = {this.onClickDeleteStudent} > Delete </DeleteButton> <AssignButton className="btn btn-info" name={student.id} onClick = {this.onClickShowAssignList} > Assign </AssignButton>  </EvenElem>
      }
      return <OddElem> {elem} <DeleteButton className="btn btn-danger" name={student.id} onClick = {this.onClickDeleteStudent} > Delete </DeleteButton> <AssignButton className="btn btn-info" name={student.id} onClick = {this.onClickShowAssignList} > Assign </AssignButton> </OddElem>
    }

    getList(props, showStudentorTutor) {
        if (showStudentorTutor === student){
            return(
               <div>{props.students.map( (student, index) =>  this.EvenOddElem(<StudentListItem key={student.id} student={student} />, index, false, student) )} </div>
            )
        }
        else{
            return(
              <div>{props.teachers.map( (teacher, index) => this.EvenOddElem(<TeacherListItem key={teacher.id} teacher={teacher} />, index, true, teacher)  )} </div>
            )
        }
    }

    getPopList(props, showList) {
        if (showList === true){
            return(
              <PopUpList>{props.teachers.map((teacher) => <TeacherElem><ul id={teacher.id} > <input type="checkbox" value={teacher.id} onChange={this.handleInputChange}/>  {teacher.name} </ul></TeacherElem>)}
               <AssignTeacherButton className="btn btn-info" onClick={this.assignStudentToTeachers}> Assign to Teacher </AssignTeacherButton></PopUpList>
          )
        }
    }

    render() {
        return (
          <QueryRenderer
                  environment={environment}
                  query={graphql`
                      query adminList_Query{
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
                          <div className="rightMargin" >
                                <div>
                                    <h2> Viewing { this.state.studentOrTutor == student ? 'list of students' : 'list of tutors'}</h2>
                                    <PaddedButton className="btn btn-primary" name="STUDENT" onClick={this.onClickMake}> Students </PaddedButton>
                                    <PaddedButton className="btn btn-primary" name="TEACHER" onClick={this.onClickMake}> Tutors </PaddedButton>
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



export default AdminListComponent;
