import React from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import type { Environment } from 'relay-runtime';


import AdminLessonForm from './../components/adminLessonForm';
import AdminLessonList from './../components/adminLessonList';
import AdminListComponent from './../components/adminList';
import environment from '../relay/environment';
import jwt_decode from 'jwt-decode';

const ToolBar = styled.div`

    background: rgba(30,209,179,1);
    background: -moz-linear-gradient(left, rgba(30,209,179,1) 0%, rgba(3,114,145,1) 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(30,209,179,1)), color-stop(100%, rgba(3,114,145,1)));
    background: -webkit-linear-gradient(left, rgba(30,209,179,1) 0%, rgba(3,114,145,1) 100%);
    background: -o-linear-gradient(left, rgba(30,209,179,1) 0%, rgba(3,114,145,1) 100%);
    background: -ms-linear-gradient(left, rgba(30,209,179,1) 0%, rgba(3,114,145,1) 100%);
    background: linear-gradient(to right, rgba(30,209,179,1) 0%, rgba(3,114,145,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1ed1b3', endColorstr='#037291', GradientType=1 );

    width: 70%;
    height: auto;
    position: relative;
    background-size: cover;  
    margin: auto;

    display: block;
    overflow: auto;

    padding-bottom: 10px;

    margin-bottom: 5%;
    text-align: center;
`;

const PaddedButton = styled.button`
    padding: 10px;
    margin-top: 10px;
    display: inline;
    background-color: transparent;
    border-color: white;
    margin-right: 10px;
    margin-left: 10px;
`;


function isAdmin() {
    if (sessionStorage.getItem('token') !== null) {
        if ((jwt_decode(sessionStorage.getItem('token'))).userType === 'admin') {
            return true;
        }
    }
    return false;
}

const AdminPage = ({ match }) => (
    <div>
        {isAdmin() &&
        <div className="container-fluid">
            <div className="row">
                <h2 className="TopTextHeader"> Administrator Tool Page </h2>

                <h5 className="TopText"> Administrators have the ability to keep track of all of the students and teachers, and create Quizzes and lessons.  </h5>
                <ToolBar>
                    <div className="adminTool">
                        <Link to="/admin/lesson"><PaddedButton className="btn btn-default">Edit Lessons</PaddedButton></Link>
                    </div>
                    <div className="adminTool">
                        <Link to="/admin/list"><PaddedButton className="btn btn-default">View Teachers and Students</PaddedButton></Link>
                    </div>
                </ToolBar>
            </div>
            <br />
            <div className="row rightMargin">
                {
                    match.params.showLesson === 'lesson' ?
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
        {!isAdmin() && <h4 className="page-error"> You are not logged in as admin </h4> }
    </div>
);

export default withRouter(AdminPage);
