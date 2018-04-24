import React from 'react';
import GoogleDocButton from './googleDocButton';
import LessonComponent from './lesson';
import addStudentWorksheetCopy from '../relay/mutations/addStudentWorksheetCopy';
import { copyFile, setPermissionToAllEdit } from '../Gapi';
import environment from '../relay/environment';


class StudentLesson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
        };
    }

    componentDidMount() {
        if (this.props.isStudent !== undefined) {
            // teacher or admin
            return;
        }
        if (this.props.studentWorksheets === null) {
            // commented out for dev purposes - this allows us to see all the lessons without clicking on student
            // this.setState({
            //     error: 'No lessons exist, please contact admin',
            // });
            return;
        }
        const studentWorksheetLessonIDs = this.props.studentWorksheets.worksheets.map(element => element.lessonID);
        if (studentWorksheetLessonIDs == undefined) {
            // same as above - comment out in production!!
            // this.setState({
            //     error: 'No lessons exist, please contact admin',
            // });
            return;
        }
        console.log('hi');
        let i;
        const error = false;
        for (i = 0; i < this.props.lessons.length; i++) {
            if (!(studentWorksheetLessonIDs.includes(this.props.lessons[i].id))) {
                const url = this.props.lessons[i].worksheetURL;
                console.log('url', url);
                const fileMatch = url.match(/[-\w]{25,}/);
                if (fileMatch === null || fileMatch === undefined) {
                    return;
                }
                const fileId = fileMatch[0];
                copyFile(fileId).then((res) => {
                    if (res == undefined || res.error) {
                        // return;
                        throw Error('Insufficient Priviledges, please contact Admin');
                    }
                    setPermissionToAllEdit(res.id);
                    addStudentWorksheetCopy(environment, this.props.location.state.student.id, this.props.lessons[i].id, res.url);
                }).catch(err => console.err(err.message));
            }
        }
    }
    render() {
        if (this.state.error !== '') {
            return <p>{this.state.error}</p>;
        }
        return (
            <div className="container-fluid">
                <h2>
                    {
                        this.props.location.state != undefined ? `${this.props.location.state.student.name}'s Lessons` : 'My Lessons - Student isnt logged in aka nonexisting user- showing this for development purposes'
                    }
                </h2>
                <GoogleDocButton url={this.props.location.state.student.url} />
                {
                    this.props.lessons.map((lesson, idx) => (
                        <LessonComponent
                            key={idx}
                            id={lesson.id}
                            lessonName={lesson.name}
                            lessonNotes={lesson.notesName}
                            lessonNotesLink={lesson.notesURL}
                            lessonWorksheetLink={lesson.worksheetURL}
                            worksheetName={lesson.worksheetName}
                            quizName={lesson.quiz}
                            quizPercentage="50%"
                            quizIsChecked={false}
                            isStudent={this.props.isStudent}
                        />
                    ))
                }
            </div>
        );
    }
}

export default StudentLesson;
