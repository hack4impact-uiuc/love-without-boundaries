// @flow

import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import environment from './../relay/environment';
import StudentListItem from './../components/studentListItem';
import Button from './../components/button';
import addStudent from './../relay/mutations/addStudent';

export default () => (
  <div>
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
          return <div>Loading...</div>;
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
