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
    handleClick(id) {
        deleteLesson(environment, id)
        window.location.reload();
    }
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query lessonListQuery{
                        lessons{
                            id
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
                                props.lessons.map((lesson, idx) => (
                                    <div className="row"  key={idx}>
                                        <LessonComponent style={{marginLeft:'15px' , display:'inline-block'}}lessonName={lesson.name} lessonNotes={lesson.notesName} lessonNotesLink={lesson.notesURL} lessonWorksheetLink={lesson.worksheetURL} worksheetName={lesson.worksheetName} />
                                        <button className="btn btn-danger" value={lesson.id} onClick={() => this.handleClick(lesson.id)}>Delete Lesson</button> 
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