import React from 'react';
import styled from 'styled-components';
import AddLesson from './../components/addlesson';
import NavBar from '../components/navBar';
import AdminList from '../components/adminList'
type Props = {
    /**/ 
  }

class AdminPage extends React.Component<Props>{
    constructor(props){
        super(props)
        this.state = {}
    }
    gotoQuiz = () => {window.location = '/quiz'}

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

export default AdminPage;