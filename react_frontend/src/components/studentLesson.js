import React from 'react';
import GoogleDocButton from './googleDocButton';
import LessonComponent from './lesson';
import addStudentWorksheetCopy from '../relay/mutations/addStudentWorksheetCopy';
import { copyFile, setPermissionToAllEdit } from '../Gapi';
import environment from '../relay/environment';
import PaddedButton from './button';
import jwtDecode from 'jwt-decode';

class StudentLesson extends React.Component {
    constructor(props) {
        super(props);
        const newWkshtObj = {};
        // this is for easy access in render
        // creates wksht Obj(hash map), where the key is the lessonID and value: worksheetURL
        if (this.props.student !== null) {
            for (let i = 0; i < this.props.student.worksheets.length; i += 1) {
                newWkshtObj[this.props.student.worksheets[i].lessonID] = this.props.student.worksheets[i].url;
            }
        }
        // same as above but for grades
        const newGrades = {};
        if (this.props.student !== null && this.props.student.grades !== undefined) {
            for (let i = 0; i < this.props.student.grades.length; i += 1) {
                newWkshtObj[this.props.student.grades[i].lesson] = this.props.student.grades[i].score;
                let s = this.props.student.grades[i].score;
                if (this.props.student.grades[i].lesson in newGrades) {
                    if (s < newGrades[this.props.student.grades[i].lesson]) {
                        s = newGrades[this.props.student.grades[i].lesson];
                    }
                }
                newGrades[this.props.student.grades[i].lesson] = s;
            }
        }
        this.state = {
            error: '',
            worksheetObj: newWkshtObj,
            grades: newGrades,
        };
    }
    componentDidMount() {
        let refresh = 0;
        const token = jwtDecode(sessionStorage.getItem('token'));
        if (token === null || !token) {
            return;
        }
        if (this.props.student === null || this.props.isStudent === false || token.userType !== 'student') {
            return;
        }
        // google Docs stuff - creating copies of worksheets
        const studentWorksheetLessonIDs = this.props.student.worksheets.map(element => element.lessonID);
        let i;
        const indices = [];
        const promises = [];
        for (i = 0; i < this.props.lessons.length; i += 1) {
            if (!(studentWorksheetLessonIDs.includes(this.props.lessons[i].id))) {
                refresh = 1;
                const url = this.props.lessons[i].worksheetURL;
                const fileMatch = url.match(/[-\w]{25,}/);
                if (fileMatch === null || fileMatch === undefined) {
                    return;
                }
                const fileId = fileMatch[0];
                promises.push(copyFile(fileId));
                indices.push(i);
            }
        }
        Promise.all(promises).then((res) => {
            for (i = 0; i < res.length; i += 1) {
                if (res[i] == undefined || res.error || res[i].id === undefined || res[i].id.length === 0) {
                    throw Error('Insufficient Privilges, please contact Admin');
                }
                refresh = 1;
                setPermissionToAllEdit(res[i].id);
                // add to database
                addStudentWorksheetCopy(environment, this.props.student.id, this.props.lessons[indices[i]].id, `https://docs.google.com/document/d/${res[i].id}/edit`);
            }
            if (refresh == 1) {
                window.location.reload();
            }
        }).catch(err => console.error(err.message));
    }
    componentWillReceiveProps(newProps) {
        const newObj = {};
        if (newProps.student !== null) {
            for (let i = 0; i < this.props.student.worksheets.length; i += 1) {
                newObj[this.props.student.worksheets[i].lessonID] = this.props.student.worksheets[i].url;
            }
        }
        this.setState({
            worksheetObj: newObj,
        });
    }
    render() {
        if (this.state.error !== '') {
            return <p>{this.state.error}</p>;
        }
        if (this.props.student === null) {
            return <p>Student Worksheets prop is null</p>;
        }
        return (
            <div className="container">
                <div className="row" style={{ padding: '10px 20px' }}>
                    <h2>
                        {
                            this.props.student !== undefined ? `${this.props.student.name}'s Lessons` : 'My Lessons - Student isnt logged in aka nonexisting user- showing this for development purposes'
                        }
                    </h2>
                    <p style={{ color: 'grey', paddingLeft: '5px' }} >Email: {this.props.student.email}</p>
                </div>
                <div className="row">
                    {
                        <div className="col-sm-8">

                            <GoogleDocButton style={{ display: 'inline-block' }} url={this.props.student.URL} location={this.props.location} />
                            <a style={{ display: 'inline-block' }} href="http://dictionary.com/">
                                <PaddedButton className="btn btn-lwb">Dictionary</PaddedButton>
                            </a>
                            <a style={{ display: 'inline-block' }} href="https://docs.google.com/document/d/1fKQIrPVuGRNT1rly3aVaYwyuowL2OlULeZFalrplcxQ/edit">
                                <PaddedButton className="btn btn-lwb">Glossary</PaddedButton>
                            </a>

                            <div className="lessons">
                                { this.props.lessons !== undefined ?
                                    this.props.lessons.map((lesson, idx) => (
                                        <LessonComponent
                                            key={idx}
                                            studentID={this.props.student.id}
                                            id={lesson.id}
                                            lessonName={lesson.name}
                                            lessonNotesLink={lesson.notesURL}
                                            lessonWorksheetLink={this.state.worksheetObj[lesson.id]}
                                            quizPercentage={(this.props.student.grades.find(l => l.lessonID === lesson.id) === undefined) ? undefined : (this.props.student.grades.find(l => l.lessonID === lesson.id)).score}
                                            quizIsChecked={false}
                                            isStudent={this.props.isStudent}
                                        />

                                    ))
                                    :
                                    <p>There arent any lessons</p>
                                }
                            </div>
                        </div>
                    }
                    <div className="col-sm-4">
                        <h3>Table of Contents</h3>
                        {
                            this.props.lessons !== undefined &&
                                this.props.lessons.map((lesson, idx) => (
                                    <p key={idx}>{idx + 1}. {lesson.name}</p>
                                ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentLesson;
