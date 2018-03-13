import React from 'react';
import LessonComponent from './../components/lesson';
import NavBar from '../components/navBar';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../relay/environment';

import Button from '../components/button'
import addStudent from '../relay/mutations/addStudent'

type Props = {
    /**/ 
  }

class StudentPage extends React.Component<Props>{

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query StudentPage_Query{
                        lessons{
                            name
                            quiz
                            worksheetName
                            worksheetURL
                            notesName
                            notesURL
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
                                <NavBar />
                                <h1>Add Student</h1>
                                {
                                    <Button onClick={() => addStudent(environment, 'Pranay', 'pranay.gp@gmail.com')}>Add Pranay</Button>
                                }
                                <h1>My Lessons</h1>
                                {
                                props.lessons.map(lesson => (
                                    <LessonComponent id={lesson.id} lessonName={lesson.name} lessonNotes={lesson.notesName} lessonNotesLink={lesson.notesURL} lessonWorksheetLink={lesson.worksheetURL} worksheetName={lesson.worksheetName} quizName={lesson.quiz} quizPercentage={"0%"} quizIsChecked={false}/>
                                ))
                                }
                            </div>
                    );
                }}
            />
        )
    }
}
    


export default StudentPage;