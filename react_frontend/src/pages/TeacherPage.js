import React from 'react';
import styled from 'styled-components';
import { Grid, Col, Row, Image, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { graphql, QueryRenderer } from 'react-relay';
import StyledButton from '../components/button';
import StudentListItem from '../components/studentListItem'
import environment from '../relay/environment';
import StudentPage from './StudentPage'
import { withRouter } from 'react-router-dom'

type Props = {
    /**/ 
}


const TeacherAddLessonBox = styled.div`
    color: white;
    font-size: 25px;
    text-align: center;
    float:right;
    margin: 20px;
    background-color: #a6acb5;
    height: 400px;
    width: 800px;
    z-index: -1;
    font-family: "Arial";
`;

const TeacherTitle = styled.div`
    border-bottom-style: solid;
    border-color: white;
    color: white;
    padding: 10px;
    font-size: 25px;
    text-align: center;
    margin: 20px;
    font-family: "Arial";
`;

const TeacherButton = styled.div`
    display: inline-block;
    border-style: solid;
    border-color: white;
    color: #a6acb5;
    padding: 15px 15px;
    margin: 5px 5px;
    font-size: 20px;
    text-align: center;
    border-radius: 15px;
    background-color: white;
    height: 40px;
    z-index: -1;
    font-family: "Arial";
`;
class TeacherPage extends React.Component<Props>{
    constructor(props){
        super(props)
    }
    gotoStudent = () => {this.props.history.push('/student')}
    render() {
        return (
            
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query TeacherPage_Query{
                        students {
                            id
                            ...studentListItem_student
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
                            I am a teacher 
                            <h3>My Students</h3> 
                            {props.students.map(student => <StudentListItem onClick={this.gotoStudent} key={student.id} student={student} />)}
                        </div>
                    );
                }}
            />
        );
    }
}

export default withRouter(TeacherPage);