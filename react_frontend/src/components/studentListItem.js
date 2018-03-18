// @flow

import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StudentPage from '../pages/StudentPage';

const StudentListItem = props => (
    // <div>
    //     <StyledButton>{props.student.name}</StyledButton>
    //     <div> </div>
    // </div>
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/student" >{props.student.name}</Link>
                </li>
            </ul>

            <hr />
            <Route path="/student" component={StudentPage} />
        </div>
    </Router>
);

export default createFragmentContainer(
    StudentListItem,
    graphql`
        fragment studentListItem_student on Student {
            name
        }
    `,
);
