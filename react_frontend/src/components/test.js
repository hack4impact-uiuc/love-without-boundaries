import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import deleteLesson from '../relay/mutations/deleteLesson';
import environment from '../relay/environment';
import AdminEditLesson from '../components/adminEditLesson';

type Props = {
    /**/
  }

class Test extends React.Component {
    getId = (props) => {
        console.log('test');
        console.log(this.props.role);
        console.log(this.props.email);
        console.log(this.props.role);
        if (this.props.role === 'student') {
            for (let i = 0; i < props.students.length; i++) {
                console.log(props.students[i].email);
                if (props.students[i].email === this.props.email) {
                    console.log(props.students[i].id);
                    this.props.history.push('/student', { student: { id: props.students[i].id, name: props.students[i].name } });
                }
            }
        } else if (this.props.role === 'teacher') {
            for (let i = 0; i < props.teachers.length; i++) {
                if (props.teachers[i].email === this.props.email) {
                    this.props.history.push('/teacher', { teacher: { id: props.teachers[i].id, name: props.teachers[i].name } });
                }
            }
        } else if (this.props.role === 'admin') {
            for (let i = 0; i < props.admins.length; i++) {
                if (props.admins[i].email === this.props.email) {
                    this.props.history.push('/admin', { admin: { id: props.admins[i].id, name: props.admins[i].name } });
                }
            }
        }
    }

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                            query signinQuery{
                                students {
                                    name
                                    email
                                    id
                                }
                                teachers {
                                    name
                                    email
                                    id
                                }
                                admins {
                                    name
                                    email
                                    id
                                }
                            }  
                        `}
                variables={{}}
                render={({ props }) => {
                    if (!props) {
                        return (
                            <div>Loading...</div>
                        );
                    }
                    return (
                        <div>
                            {console.log('test')}
                            Authenication failed
                            {this.getId(props)}

                        </div>
                    );
                }}
            />
        );
    }
}


export default Test;
