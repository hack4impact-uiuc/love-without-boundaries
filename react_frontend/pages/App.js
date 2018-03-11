// @flow

import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { graphql, QueryRenderer } from 'react-relay';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import environment from './../relay/environment';
import StudentListItem from './../components/studentListItem';
import Button from './../components/button';
import addStudent from './../relay/mutations/addStudent';

import StudentPage from './StudentPage';
import TeacherPage from './TeacherPage';
import AdminPage from './AdminPage'; 
import QuizPage from './QuizPage'; 
import HomePage from './HomePage';
import styled from 'styled-components';

type Props = {
    /**/ 
}
const TopDiv = styled.div`
    font-family: 'Roboto Slab', serif;
`;
class App extends React.Component<Props>{ 
    render() {
        return (
            <TopDiv>
                <Router>
                    <div>
                        <Route exact path="/" component={ HomePage } /> 
                        <Route path="/student" component={StudentPage} />
                        <Route path="/teacher" component={TeacherPage} />
                        <Route path="/admin" component={AdminPage} />
                        <Route path="/quiz" component={QuizPage} />
                    </div>
                </Router>
                {/* <QueryRenderer
                    environment={environment}
                    query={graphql`
                        query App_Query{
                            students {
                                ...studentListItem_student
                            }
                        }   
                    `}
                    variables={{}}
                    render={({ props }) => {
                        if (!props) {
                            return (
                                <div>Cant get query</div>
                            );
                        }
                        return (
                            <div>
                                {props.students.map(s => <StudentListItem student={s} />)}
                                <Button onClick={() => addStudent(environment, 'Pranay')}>Add Pranay</Button>
                            </div>
                        );
                    }}
                /> */}
            </TopDiv>
        );
    }
}

export default App;