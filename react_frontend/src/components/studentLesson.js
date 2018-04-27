import React from 'react';
import GoogleDocButton from './googleDocButton';
import LessonComponent from './lesson';
import addStudentWorksheetCopy from '../relay/mutations/addStudentWorksheetCopy';
import { copyFile, setPermissionToAllEdit } from '../Gapi';
import environment from '../relay/environment';
import PaddedButton from './button';
import jwt_decode from 'jwt-decode';

class StudentLesson extends React.Component {
    constructor(props) {
        super(props);
        const newWkshtObj = {};
        if (this.props.student !== null) {
            for (let i = 0; i < this.props.student.worksheets.length; i += 1) {
                newWkshtObj[this.props.student.worksheets[i].lessonID] = this.props.student.worksheets[i].url;
            }
        }
        this.state = {
            error: '',
            worksheetObj: newWkshtObj,
        };
    }
    componentDidMount() {
        let refresh = 0;
        if (this.props.student === null) {
            return;
        }
        const studentWorksheetLessonIDs = this.props.student.worksheets.map(element => element.lessonID);
        let i;
        const indices = [];
        const promises = [];
        for (i = 0; i < this.props.lessons.length; i++) {
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
                if (res[i] == undefined || res.error || res[i].id === undefined) {
                    throw Error('Insufficient Privilges, please contact Admin');
                }
                refresh = 1;
                setPermissionToAllEdit(res[i].id);
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
            <div className="container-fluid">
                <h2>
                    {
                        this.props.student !== undefined ? `${this.props.student.name}'s Lessons` : 'My Lessons - Student isnt logged in aka nonexisting user- showing this for development purposes'
                    }
                </h2>
                <div className="row">
                    <div className="col-sm-3">
                        <GoogleDocButton url={this.props.student.URL} location={this.props.location} />
                        <a href="http://dictionary.com/"><PaddedButton className="btn btn-info">Cambodian-English Dictionary</PaddedButton></a>
                    </div>
                    <div className="col-sm-9">
                        {
                            this.props.lessons !== undefined ?
                                this.props.lessons.map((lesson, idx) => (
                                    <LessonComponent
                                        key={idx}
                                        id={lesson.id}
                                        lessonName={lesson.name}
                                        lessonNotesLink={lesson.notesURL}
                                        lessonWorksheetLink={this.state.worksheetObj[lesson.id]}
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
