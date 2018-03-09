// @flow

import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

const StudentListItem = props => (
    <div>
        ID: <b>{props.student.id}</b> <br />
        Name: <b>{props.student.name}</b> <br />
        Teacher's name: <b>{props.student.teacher.name}</b> <br />
    </div>
);

export default createFragmentContainer(
    StudentListItem,
    graphql`
        fragment studentListItem_student on Student {
            id
            name
            teacher {
                name
            }
        }
    `,
);
