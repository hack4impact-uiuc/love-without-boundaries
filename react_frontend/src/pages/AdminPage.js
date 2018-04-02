import React from 'react';
import styled from 'styled-components';
import AddLesson from './../components/addlesson';
import NavBar from '../components/navBar';
import AdminList from '../components/adminList'
import { withRouter } from 'react-router-dom'

type Props = {
    /**/ 
}

class AdminPage extends React.Component<Props>{
    constructor(props){
        super(props)
        this.state = {}
    }
    gotoQuiz = () => {this.props.history.push('/quiz')}

    render() {
        return (
            <div>I am an admin
                <AddLesson/>
                <button onClick = {this.gotoQuiz}>Create Quiz</button>
                <AdminList/>
            </div>
        );
    }
}

export default withRouter(AdminPage);