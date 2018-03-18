// @flow

import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

const StudentListItem = props => (
    <div>
        <button onClick={props.onClick}>{props.student.name}</button>
        <div></div>
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
