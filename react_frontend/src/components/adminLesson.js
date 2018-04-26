import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import deleteLesson from '../relay/mutations/deleteLesson';
import environment from '../relay/environment';
import PaddedButton from '../components/button';
import editLesson from '../relay/mutations/editLesson';

const LessonTitle = styled.div`
    border-bottom-style: solid;
    border-color: white;
    color: white;
    padding: 10px;
    font-size: 35px;
    text-align: right;
    z-index = -1;
    margin: 20px;
`;

const LessonProps = styled.div`
    border-style: solid;
    border-color: white;
    color: #337ab7;
    padding: 5px 5px;
    margin: 5px 5px;
    font-size: 20px;
    text-align: center;
    border-radius: 0px;
    background-color: white;
    height: 50px;
    z-index: -1;
    border-radius: 0px 30px;

`;


const SlightlyPaddedButton = styled.button`
    margin: 0px 5px;
`;

class AdminLessonComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessonName: '',
        };
    }
    handleEditLessonClick = () => {
        editLesson(environment, this.props.id, this.state.lessonName);
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

            <div className="row">
                <div className="col-md-3 col-sm-2" />
                <div className="col-sm-6 admin-lesson-box">
                    <h3 className="lesson-title">{this.props.lessonName}</h3>
                    <a href={this.props.lessonNotesLink}><button className="btn lesson-btn">Notes</button></a>
                    <a href={this.props.lessonWorksheetLink}><button style={{ marginLeft: '10px' }}className="btn lesson-btn">Worksheet</button></a>
                    <br />
                    <p className="lesson-quiz-text"> Quiz:</p>
                    <Link style={{ display: 'block' }} to={{ pathname: '/quiz', state: { lessonID: this.props.id } }}>
                        <PaddedButton className="btn btn-default">Edit Quiz</PaddedButton>
                    </Link>
                    <br />
                    <label htmlFor="edit_lesson_name_input">Edit Lesson Name: </label>
                    <input className="form-control" id="edit_lesson_name_input" name="name" type="text" value={this.state.lessonName} onChange={this.handleChange} placeholder="Edit Lesson Name" />
                    <PaddedButton
                        className="btn btn-info"
                        value={this.props.id}
                        onClick={() => this.handleEditLessonClick(this.props.id)}
                        style={{ display: 'block' }}
                    >
                    Edit Lesson
                    </PaddedButton>
                    <PaddedButton
                        className="btn btn-danger"
                        value={this.props.id}
                        onClick={() => this.handleClick(this.props.id)}
                    >
                    Delete Lesson
                    </PaddedButton>
                </div>
            </div>
        );
    }
}

export default withRouter(AdminLessonComponent);
