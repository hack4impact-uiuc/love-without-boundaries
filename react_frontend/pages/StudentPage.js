import * as React from 'react';
import styled from 'styled-components';
import Lesson from './../components/lesson';

type Props = {
    /**/ 
  }

class StudentPage extends React.Component<Props>{

    render() {
        return (
            <div>I am a StudentPage
                <Lesson>This is sample lesson Nouns</Lesson>
            </div>
        );
    }
}

export default StudentPage;