import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import deleteLesson from '../relay/mutations/deleteLesson';
import environment from '../relay/environment';
import PaddedButton from '../components/button';
import editLesson from '../relay/mutations/editLesson';

class AdminLessonComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessonName: this.props.lessonName,
            showEditLesson: false,
        };
    }
    handleEditLessonClick = () => {
        editLesson(environment, this.props.id, this.state.lessonName);
        window.location.reload();
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
    showForm = () => {
        this.setState({ showEditLesson: true });
    }
    render() {
        return (

            <div className="row">
                <div className="col-md-3 col-sm-2" />
                <div className="col-sm-6 admin-lesson-box">
                    <h3 className="lesson-title">
                        {this.state.showEditLesson ?
                            <p>
                                <input className="form-control" id="edit_lesson_name_input" name="name" type="text" value={this.state.lessonName} onChange={this.handleChange} placeholder={this.state.lessonName} />
                                <PaddedButton
                                    className="btn btn-link"
                                    onClick={() => this.handleEditLessonClick(this.props.id)}
                                >
                                    <span className="glyphicon glyphicon-ok" aria-hidden="true" />
                                </PaddedButton>
                            </p>
                            :
                            <p>
                                {this.props.lessonName}
                                <PaddedButton className="btn btn-link" onClick={this.showForm}>
                                    <span className="glyphicon glyphicon-pencil" aria-hidden="true" />
                                </PaddedButton>
                            </p>
                        }
                    </h3>
                    <a href={this.props.lessonNotesLink}><button className="btn lesson-btn">Notes</button></a>
                    <br /><br />
                    <a href={this.props.lessonWorksheetLink}><button className="btn lesson-btn">Worksheet</button></a>
                    <br /><br />
                    <Link style={{ display: 'block' }} to={{ pathname: '/quiz', state: { lessonID: this.props.id } }}>
                        <button className="btn lesson-btn">Edit Quiz</button>
                    </Link>
                    <br />
                    <button className="btn lesson-btn2" onClick={() => this.handleClick(this.props.id)}>
                        <style className="lesson-text">Delete Lesson</style>
                    </button>
                </div>
            </div>
        );
    }
}

export default withRouter(AdminLessonComponent);
