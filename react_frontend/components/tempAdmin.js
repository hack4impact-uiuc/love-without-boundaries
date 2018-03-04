import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**/
}
let student = 0
let tutor = 1
class TempAdminComponent extends React.Component<Props>{
      constructor(props) {
        super()
        this.state = {
          studentOrTutor: student
      }
    }

    onClickMakeTutor(e) {
      this.setState({
        studentOrTutor: tutor
      })
      console.log(this.state.studentOrTutor)
    }

    onClickMakeStudent(e) {
      this.setState({
        studentOrTutor: student
      })
      console.log(this.state.studentOrTutor)
    }

    render() {
        return(
            <div>
            <h2> View Tutors or Students</h2>
            <button onClick={this.onClickMakeStudent.bind(this)}> Students </button>
            <button onClick={this.onClickMakeTutor.bind(this)}> Tutors </button>
            <div> {getList(this.state.studentOrTutor)} </div>
            </div>
        );
    }

}

function getList(showStudentorTutor) {
    if (showStudentorTutor === student){
        return(
            <div>{studentList.map((item, index) => <ul key={item.id}>{item.value} </ul>)}</div>
        )
    }
    else{
        return(
          <div>{tutorList.map((item, index) => <ul key={item.id}>{item.value} </ul>)}</div>
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
  { id: 'chicken', value: 'Timmeh' },
  { id: 'shrek', value: 'Aria grande' },
  { id: 'leave', value: 'Alvin and the buttmunks' },
  { id: 'no', value: 'megha_dum' },
  { id: 'croissant', value: 'sniffles' },
  {
    id: 'memeless',
    value: 'memeless and less'
  }
]

export default TempAdminComponent;
