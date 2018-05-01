import React from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import type { Environment } from 'relay-runtime';
import jwtDecode from 'jwt-decode';

import ErrorMessage from '../components/errorMessage';
import AdminLessonForm from '../components/adminLessonForm';
import AdminLessonList from '../components/adminLessonList';
import AdminListComponent from '../components/adminList';

const PaddedButton = styled.button`
    padding: 10px;
    margin-top: 10px;
    display: inline;
    background-color: transparent;
    border-color: white;
    margin-right: 10px;
    margin-left: 10px;
`;


class AdminPage extends React.Component {
    isAdmin = () => {
        if (sessionStorage.getItem('token') !== null) {
            if ((jwtDecode(sessionStorage.getItem('token'))).userType === 'admin') {
                return true;
            }
        }
        return false;
    }

    render() {
        return (
            <div>
                {
                    this.isAdmin() &&
                    <div className="container-fluid">
                        <div className="row">
                            <h2 className="TopTextHeader"> Administrator Tool Page </h2>

                            <h5 className="TopText"> Administrators have the ability to keep track of all of the students and teachers, and create Quizzes and lessons.  </h5>
                            <div className="admin-tool-bar">
                                <div className="adminTool">
                                    <Link to="/admin/lesson"><PaddedButton className="btn btn-admin">Edit Lessons</PaddedButton></Link>
                                </div>
                                <div className="adminTool">
                                    <Link to="/admin/list"><PaddedButton className="btn btn-admin">View Teachers and Students</PaddedButton></Link>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row rightMargin">
                            {
                                this.props.match.params.showLesson === 'lesson' ?
                                    <div className="centered">
                                        <AdminLessonForm />
                                        <AdminLessonList />
                                    </div>
                                    :
                                    <AdminListComponent />
                            }
                        </div>
                    </div>
                }
                {!this.isAdmin() && <ErrorMessage code="404" message="You are not logged in as admin" /> }
            </div>
        );
    }
}


export default withRouter(AdminPage);
