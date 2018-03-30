import React from 'react';
import LessonComponent from './../components/lesson';
import NavBar from '../components/navBar';
import deleteLesson from '../relay/mutations/deleteLesson'
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../relay/environment';
import button from '../components/button'

type Props = {
    /**/ 
  }

class LessonList extends React.Component<Props>{
    delete = (id) => {
        deleteLesson(environment, id)
    }
    handleClick = e => {
        const id = e.target.name
        deleteLesson(environment, id)
    }
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query lessonListQuery{
                        lessons{
                            name
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
                                {
                                props.lessons.map(lesson => (
                                    <div>
                                        <LessonComponent id={lesson.id} lessonName={lesson.name} lessonNotes={lesson.notesName} lessonNotesLink={lesson.notesURL} lessonWorksheetLink={lesson.worksheetURL} worksheetName={lesson.worksheetName} />
                                        <button name={lesson.id} onClick={this.handleClick}>Delete Lesson</button>
                                    </div>
                                ))
                                }
                            </div>
                    );
                }}
            />
        )
    }
}
    


export default LessonList;