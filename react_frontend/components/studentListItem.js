// @flow

import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

const StudentListItem = props => (
  <div>{props.student.name}</div>
);

export default createFragmentContainer(
  StudentListItem,
  graphql`
        fragment studentListItem_student on Student {
            name
        }
    `,
);
