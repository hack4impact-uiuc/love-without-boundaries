import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import deleteLesson from '../relay/mutations/deleteLesson';
import environment from '../relay/environment';
import AdminEditLesson from '../components/adminEditLesson';

type Props = {
    /**/
  }

class LessonList extends React.Component<Props> {
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
                                    <AdminEditLesson key={idx} lesson={lesson} />
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
