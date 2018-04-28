// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StudentPage from './StudentPage';
import TeacherPage from './TeacherPage';
import AdminPage from './AdminPage';
import HomePage from './HomePage';
import QuizPage from './QuizPage';
import TakeQuizPage from './TakeQuizPage';
import ReviewQuizPage from './ReviewQuizPage';
import './../../assets/style.css';
import './../../assets/Hover.css';
import NavBar from '../components/navBar';
import Footer from '../components/footer';


type Props = {
    /**/
}

// student name - tim, private key - 'tim'
const studentJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVHlwZSI6InN0dWRlbnQiLCJ1c2VySUQiOiJVM1IxWkdWdWREbzFZV0UxTjJOaU9EWXlZMlUwT1RrNVpXSTBZbUZrTkdNPSIsImlhdCI6MTUyMTQ5ODcwM30.8F_hov-c-8NxTYBtQPtUvQV-RJ9yFUCw6VNEzjYxNs8';
// teacher name - aria, private key - 'tim
const teacherJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVHlwZSI6InRlYWNoZXIiLCJ1c2VySUQiOiJWR1ZoWTJobGNqbzFZV0V5TVdSa05qRTBPVGc0TlRkak0yUTVZemMyWm1RPSIsImlhdCI6MTUyMTQ5ODYyNn0.81F-tqrRmNWjVaaWAtUcJDZWxnHsgZxhnPFBlNEAwWM';

// CHANGE TO STUDENTJWT OR TEACHERJWT DEPENDING ON WHAT YOU ARE WORKING ON
localStorage.setItem('token', studentJWT);
// to decode it, import jwt-decode https://www.npmjs.com/package/jwt-decode
const App = () => (
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
                        <Link to="/admin/list" >Admin</Link>
                    </li>
                </ul>

                <hr style={{ margin: '0px' }} />
                <NavBar className="infront" />
                <Route exact path="/" component={HomePage} />
                <Route path="/student" component={StudentPage} />
                <Route path="/teacher" component={TeacherPage} />
                <Route path="/admin/:showLesson" component={AdminPage} />
                <Route path="/quiz" component={QuizPage} />
                <Route path="/takequiz" component={TakeQuizPage} />
                <Route path="/reviewquiz" component={ReviewQuizPage} />
            </div>
        </Router>
        <div />

        <Footer />

    </div>


);

export default App;
