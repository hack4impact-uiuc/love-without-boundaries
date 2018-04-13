// @flow

import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

const TeacherListItem = props => (
    <div>{props.teacher.name}</div>
);

export default createFragmentContainer(
    TeacherListItem,
    graphql`
        fragment teacherListItem_teacher on Teacher {
            name
        }
    `,
);
