import React from 'react';
import styled from 'styled-components';
import AddLesson from './../components/addlesson';
import NavBar from '../components/navBar';
type Props = {
    /**/ 
  }

class AdminPage extends React.Component<Props>{

    render() {
        return (
            <div>I am an admin
                <AddLesson/>
            </div>

        );
    }
}

export default AdminPage;