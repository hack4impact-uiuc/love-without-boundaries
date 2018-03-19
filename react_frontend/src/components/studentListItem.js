// @flow

import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import StudentPage from '../pages/StudentPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const StudentListItem = props => (
    <div>
        <button onClick={props.onClick}>{props.student.name}</button>
        <div />
    </div>
);

export default createFragmentContainer(
    StudentListItem,
    graphql`
        fragment studentListItem_student on Student {
            name
        }
    `,
);
