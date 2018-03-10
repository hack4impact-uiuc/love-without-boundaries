import React from 'react';
import styled from 'styled-components';
import LessonComponent from './../components/lesson';
import {Button} from 'react-bootstrap';
import AddLessonForm from './addlessonform';
import DeleteLessonForm from './deletelessonform';

var id = 0;

class MutateLesson extends React.Component {
    constructor() {
        super();
        this.state = {
            lessons: [],
            name: '',
            notes: '',
            notes_link: '',
            wksht: '',
            wksht_link: '',
            quiz: '',
            delete_id: '',
            quiz_done: '',
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            lessons: this.state.lessons.concat({
                id: id,
                name: this.state.name,
                notes: this.state.notes,
                notes_link: this.state.notes_link,
                worksheet: this.state.wksht,
                worksheet_link: this.state.wksht_link,
                quiz: this.state.quiz,
            }),
        });
        id++;
    }


    handleDelete = (event) => {
        event.preventDefault();
        var len = this.state.lessons.length;
        var index = parseInt(this.state.delete_id);
        this.setState({lessons: this.state.lessons.filter(lesson => lesson.id != index)});
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handler}>Add Lesson:
                    <div>
                        <label htmlFor="lesson_name_input">Lesson Name: </label>
                        <input id="lesson_name_input" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="lesson_notes_input">Lesson Notes: </label>
                        <input id="lesson_notes_input" name="notes" type="text" value={this.state.notes} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="lesson_notes_link_input">Lesson Notes Link: </label>
                        <input id="lesson_notes_link_input" name="notes_link" type="text" value={this.state.notes_link} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="lesson_wksht_input">Lesson Worksheet: </label>
                        <input id="lesson_wksht_input" name="wksht" type="text" value={this.state.wksht} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="lesson_wksht_link_input">Lesson Worksheet Link: </label>
                        <input id="lesson_wksht_link_input" name="wksht_link" type="text" value={this.state.wksht_link} onChange={this.handleChange} />
                    </div>
                    
                    <div>
                        <button>Add Quiz</button>
                    </div>
                    <div>
                        <button>Add Lesson</button>
                    </div>
                </form>

                <form onSubmit={this.props.handler}>Delete Lesson:
                    <div>
                        <label htmlFor="delete_lesson_id">ID:</label>
                        <input id="delete_lesson_id" name="delete_id" type="text" value={this.state.delete_id} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button>Delete Lesson</button>
                    </div>
                </form>

                <div>
                    {
                        this.state.lessons.map(lesson => (
                            <div>
                                <LessonComponent id={lesson.id} lessonName={lesson.name} lessonNotes={lesson.notes} lessonNotesLink={lesson.notes_link} lessonWorksheetLink={lesson.worksheet_link} worksheetName={lesson.worksheet} quizName={lesson.quiz} quizPercentage={"0%"} quizIsChecked={false}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default MutateLesson;
