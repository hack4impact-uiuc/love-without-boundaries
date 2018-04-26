import React from 'react';
import { Link } from 'react-router-dom';
import LessonComponent from './../components/lesson';
import deleteLesson from '../relay/mutations/deleteLesson';
import environment from '../relay/environment';
import PaddedButton from '../components/button';
import editLesson from '../relay/mutations/editLesson';

class adminEditLesson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessonName: '',
        };
    }
    handleEditLessonClick = (id) => {
        editLesson(environment, this.props.lesson.id, this.state.lessonName);
    }
    handleClick = (id) => {
        deleteLesson(environment, id);
        window.location.reload();
    }
    handleChange = (e) => {
        this.setState({
            lessonName: e.target.value,
        });
    }
    render() {
        return (
            <div className="row" >
                <LessonComponent
                    id={this.props.lesson.id}
                    lessonName={this.props.lesson.name}
                    lessonNotesLink={this.props.lesson.notesURL}
                    lessonWorksheetLink={this.props.lesson.worksheetURL}
                    worksheetName={this.props.lesson.worksheetName}
                />
                <div>
                    <div className="form-group" style={{ maxWidth: '200px' }}>
                        <label htmlFor="edit_lesson_name_input">Edit Lesson Name: </label>
                        <input className="form-control" id="edit_lesson_name_input" name="name" type="text" value={this.state.lessonName} onChange={this.handleChange} placeholder="Edit Lesson Name" />
                    </div>
                    <PaddedButton
                        className="btn btn-info"
                        value={this.props.lesson.id}
                        onClick={() => this.handleEditLessonClick(this.props.lesson.id)}
                        style={{ display: 'block' }}
                    >
                    Edit Lesson
                    </PaddedButton>
                </div>
                <PaddedButton
                    className="btn btn-danger"
                    value={this.props.lesson.id}
                    onClick={() => this.handleClick(this.props.lesson.id)}
                >
                Delete Lesson
                </PaddedButton>
                <Link style={{ display: 'block' }} to={{ pathname: '/quiz', state: { lessonID: this.props.lesson.id } }}>
                    <PaddedButton className="btn btn-default">Edit Quiz</PaddedButton>
                </Link>
            </div>
        );
    }
}
export default adminEditLesson;
