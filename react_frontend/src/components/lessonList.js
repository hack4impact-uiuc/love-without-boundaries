import React from 'react';
import { Link } from 'react-router-dom';
import { graphql, QueryRenderer } from 'react-relay';
import LessonComponent from './../components/lesson';
import deleteLesson from '../relay/mutations/deleteLesson';
import environment from '../relay/environment';
import button from '../components/button';

type Props = {
    /**/
  }

class LessonList extends React.Component<Props> {
    handleClick = (id) => {
        deleteLesson(environment, id);
        window.location.reload();
    }
    editQuiz = e => {
        this.props.history.push('/quiz');
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
<<<<<<< HEAD
                                    <div className="row"key={idx}>
                                        <LessonComponent style={{marginLeft:'15px' , display:'inline-block'}} id={lesson.id} lessonName={lesson.name} lessonNotes={lesson.notesName} lessonNotesLink={lesson.notesURL} lessonWorksheetLink={lesson.worksheetURL} worksheetName={lesson.worksheetName} />
                                        <button className="btn btn-danger" value={lesson.id} onClick={() => this.handleClick(lesson.id)}>Delete Lesson</button> 
=======
                                    <div className="row" key={idx} >
                                        <LessonComponent
                                            lessonName={lesson.name}
                                            lessonNotesLink={lesson.notesURL}
                                            lessonWorksheetLink={lesson.worksheetURL}
                                            worksheetName={lesson.worksheetName}
                                        />
                                        <button
                                            className="btn btn-danger"
                                            value={lesson.id}
                                            onClick={() => this.handleClick(lesson.id)}
                                        >
                                        Delete Lesson
                                        </button>
                                        <Link key={idx} style={{ display: 'block' }} to={{ pathname: '/quiz', state: { lessonID: lesson.id } }}>
                                            <button className="btn btn-default">Edit Quiz</button>
                                        </Link>
>>>>>>> master
                                    </div>
                                ))
                            }
                        </div>
                    );
                }}
            />
        );
    }
}


export default LessonList;
