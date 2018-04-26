import React from 'react';
import GoogleDocButton from './googleDocButton';
import LessonComponent from './lesson';
import addStudentWorksheetCopy from '../relay/mutations/addStudentWorksheetCopy';
import { copyFile, setPermissionToAllEdit } from '../Gapi';
import environment from '../relay/environment';
import PaddedButton from './button';

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
        let i;
        const error = false;
        for (i = 0; i < this.props.lessons.length; i++) {
            if (!(studentWorksheetLessonIDs.includes(this.props.lessons[i].id))) {
                addStudentWorksheetCopy(environment, this.props.location.state.student.id, this.props.lessons[i].id, this.props.lessons[i].worksheetURL);
                const url = this.props.lessons[i].worksheetURL;
                console.log('url', url);
                const fileMatch = url.match(/[-\w]{25,}/);
                if (fileMatch === null || fileMatch === undefined) {
                    return;
                }
                const fileId = fileMatch[0];
                copyFile(fileId).then((res) => {
                    if (res == undefined || res.error) {
                        return;
                        // throw Error('Insufficient Priviledges, please contact Admin');
                    }
                    setPermissionToAllEdit(res.id);
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
                <div className="row">
                    <div className="col-sm-3">
                        <GoogleDocButton url="https://docs.google.com/document/d/1EGbrZFxY33xyEZdLyXmKGdWi5NR4CL7nS4C_7HzhSgE/edit" />
                        <a href="http://dictionary.com/"><PaddedButton className="btn btn-default">Cambodian-English Dictionary</PaddedButton></a>
                    </div>
                    <div className="col-sm-9">
                        {
                            this.props.lessons !== undefined ?
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
                                :
                                <p>There arent any lessons</p>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentLesson;
