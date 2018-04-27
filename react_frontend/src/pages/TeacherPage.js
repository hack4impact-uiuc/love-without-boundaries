import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { graphql, QueryRenderer } from 'react-relay';
import jwtDecode from 'jwt-decode';
import environment from '../relay/environment';

type Props = {
    /**/
}

class TeacherPage extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            teacherID: this.getTeacherId,
        };
    }
    getTeacherId = () => {
        const { location } = this.props;
        if (location.state !== undefined && location.state.teacher !== undefined) {
            return location.state.teacher.id;
        }
        return jwtDecode(sessionStorage.getItem('token')) !== null ? jwtDecode(sessionStorage.getItem('token')).id : '';
    }
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query TeacherPage_Query($teacher_id: ID!){
                        node(id: $teacher_id) {
                            ... on Teacher {
                                name
                                email
                                students {
                                    name
                                    id
                                    URL
                                }
                            }
                        }
                    }
                `}
                variables={{
                    teacher_id: this.getTeacherId(),
                }}
                render={({ props }) => {
                    if (props) {
                        // check if empty
                        if (props.node == null || Object.keys(props.node).length === 0) {
                            return <h4 className="page-error">You must be a logged in as a Teacher to see this page.</h4>;
                        }
                        return (
                            <div className="container-fluid">
                                <h3>{props.node.name} Students</h3>
                                <div className="col-sm-6">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Student</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { props.node == null || props.node.students == null ?
                                                <p>You have no assigned students.</p>
                                                : props.node.students.map((student, idx) => (
                                                    <tr key={idx}>
                                                        <th scrope="row">{idx}</th>
                                                        <th>
                                                            <Link key={idx} style={{ display: 'block' }} to={{ pathname: '/student', state: { student } }}>
                                                                <button className="btn btn-default">{student.name}</button>
                                                            </Link>
                                                        </th>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-sm-2" />
                                <div className="col-sm-4">
                                    <p>Welcome {props.node.name}!</p>
                                    <p>As a teacher, you are assigned students, which are shown in this page.
                                        Once you click on their name, you would see their profile, where you will
                                        see their lessons. Each lesson has a link to lesson notes (same for everyone) and a link to a
                                        specific worksheet document for that student.
                                    </p>
                                    <p style={{ color: 'grey' }}>Email: {props.node.email}</p>
                                </div>
                            </div>
                        );
                    }

                    return (
                        <div>Loading...</div>
                    );
                }}
            />
        );
    }
}

export default withRouter(TeacherPage);
