import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../relay/environment';
import jwt_decode from 'jwt-decode';

type Props = {
    /**/
}

const TeacherAddLessonBox = styled.div`
    color: white;
    font-size: 25px;
    text-align: center;
    float:right;
    margin: 20px;
    background-color: #a6acb5;
    height: 400px;
    width: 800px;
    z-index: -1;
    font-family: "Arial";
`;

const TeacherTitle = styled.div`
    border-bottom-style: solid;
    border-color: white;
    color: white;
    padding: 10px;
    font-size: 25px;
    text-align: center;
    margin: 20px;
    font-family: "Arial";
`;

const TeacherButton = styled.div`
    display: inline-block;
    border-style: solid;
    border-color: white;
    color: #a6acb5;
    padding: 15px 15px;
    margin: 5px 5px;
    font-size: 20px;
    text-align: center;
    border-radius: 15px;
    background-color: white;
    height: 40px;
    z-index: -1;
    font-family: "Arial";
`;
class TeacherPage extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            teacherID: 'VGVhY2hlcjo1YWNhOTVkMjVkNTM3ODc4ZDQ1YjVlNjA=',
            // teacherID: this.props.location.state != undefined ? this.props.location.state : jwt_decode(localStorage.getItem('token')).userID
        };
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
                                students {
                                    name
                                    id
                                }
                            }
                        }
                    }
                `}
                variables={{
                    teacher_id: this.props.location.state != undefined ? this.props.location.state.teacher.id : jwt_decode(localStorage.getItem('token')).userID,
                }}
                render={({ props }) => {
                    if (props) {
                        if (props.node == null) {
                            return <h5>Error Fetching, You must be a teacher/admin to see this.</h5>;
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
                                                    <tr>
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
