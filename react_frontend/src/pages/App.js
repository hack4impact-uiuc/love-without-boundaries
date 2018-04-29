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

type Props = {
    /**/
}


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
        <footer style={{ position: 'center', 'margin-left': '45% ' }} >Made by Hack4Impact@uiuc</footer>
    </div>
);

export default App;
