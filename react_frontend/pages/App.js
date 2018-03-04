// @flow

import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import environment from './../relay/environment';
import StudentListItem from './../components/studentListItem';
import Button from './../components/button';
import addStudent from './../relay/mutations/addStudent';

import HomePage from './HomePage';
import StudentPage from './StudentPage';
import TeacherPage from './TeacherPage';
import AdminPage from './AdminPage';  

type Props = {
    /**/ 
  }

class App extends React.Component<Props>{ 
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/" >Home</Link>
                            </li>
                            <li>
                                <Link to="/student" >Student</Link>
                            </li>
                            <li>
                                <Link to="/teacher" >Teacher</Link>
                            </li>
                            <li>
                                <Link to="/admin" >Admin</Link>
                            </li>
                        </ul>

                        <hr />

                        <Route exact path="/" component={HomePage} />
                        <Route path="/student" component={StudentPage} />
                        <Route path="/teacher" component={TeacherPage} />
                        <Route path="/admin" component={AdminPage} />
                    </div>
                </Router>
                <QueryRenderer
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
                />
            </div>
        );
    }
}

export default App;