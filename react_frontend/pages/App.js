// @flow

import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import environment from './../relay/environment';
import StudentListItem from './../components/studentListItem';
import Button from './../components/button';
import addStudent from './../relay/mutations/addStudent';
import StudentPage from './StudentPage';
import TeacherPage from './TeacherPage';
import AdminPage from './AdminPage';

const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
);
  
const About = () => (
    <div>
      <h2>About</h2>
    </div>
  );
  

export default () => (
    <div>
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>

                <hr />

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
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
                        <section>
                            <StudentPage />
                            <TeacherPage />
                            <AdminPage />
                        </section>
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

