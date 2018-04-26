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
        const studentWorksheetLessonIDs = this.props.studentWorksheets.worksheets.map(element => element.lessonID);
        console.log('hi');
        let i;
        const error = false;
        console.log(this.props.lessons.length);
        const indices = [];
        const promises = [];
        for (i = 0; i < this.props.lessons.length; i++) {
            if (!(studentWorksheetLessonIDs.includes(this.props.lessons[i].id))) {
                const url = this.props.lessons[i].worksheetURL;
                console.log('url', url);
                const fileMatch = url.match(/[-\w]{25,}/);
                if (fileMatch === null || fileMatch === undefined) {
                    return;
                }
                const fileId = fileMatch[0];
                console.log(fileId);
                promises.push(copyFile(fileId));
                indices.push(i);
            }
        }
        Promise.all(promises).then((res) => {
            console.log(res);
            console.log(indices);
            for (i = 0; i < res.length; i++) {
                if (res[i] == undefined || res.error) {
                    throw Error('Insufficient Privilges, please contact Admin');
                }
                console.log('Adding wksht to db');
                setPermissionToAllEdit(res[i].id);
                addStudentWorksheetCopy(environment, this.props.location.state.student.id, this.props.lessons[indices[i]].id, `https://docs.google.com/document/d/${res[i].id}/edit`);
            }
        }).catch(err => console.error(err.message));
    }
    // for (i = 0; i < this.props.lessons.length; i += 1) {
    //     if (!(studentWorksheetLessonIDs.includes(this.props.lessons[i].id))) {
    //         const url = this.props.lessons[i].worksheetURL;
    //         console.log('url', url);
    //         const fileMatch = url.match(/[-\w]{25,}/);
    //         if (fileMatch === null || fileMatch === undefined) {
    //             return;
    //         }
    //         const fileId = fileMatch[0];
    //         copyFile(fileId).then((res) => {
    //             console.log('i', i);
    //             if (res == undefined || res.error) {
    //                 // return;
    //                 throw Error('Insufficient Priviledges, please contact Admin');
    //             }
    //             setPermissionToAllEdit(res.id);
    //             console.log(this.props.location.state.student);
    //             console.log(this.props.lessons);
    //             console.log(i);
    //             addStudentWorksheetCopy(environment, this.props.location.state.student.id, this.props.lessons[i].id, `https://docs.google.com/document/d/${res.id}/edit`);
    //         }).catch(err => console.error(err.message));
    //     }
    // }
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
                <GoogleDocButton url={this.props.studentWorksheets.URL} location={this.props.location} />
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
