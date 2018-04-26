import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../relay/environment';
import AdminLessonComponent from '../components/adminLesson';

class AdminLessonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query adminLessonListQuery{
                        lessons{
                            id
                            name
                            worksheetURL
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
                                    <AdminLessonComponent
                                        key={idx}
                                        id={lesson.id}
                                        lessonName={lesson.name}
                                        lessonNotesLink={lesson.notesURL}
                                        lessonWorksheetLink={lesson.worksheetURL}
                                        worksheetName={lesson.worksheetName}
                                    />
                                ))
                            }
                        </div>
                    );
                }}
            />
        );
    }
}


export default AdminLessonList;
