import React from 'react';
import styled from 'styled-components';
import LessonComponent from './../components/lesson';
import {Button} from 'react-bootstrap';


class AddLesson extends React.Component {
    constructor() {
        super();
        this.state = {
            lessons: [],
            name: '',
            notes: '',
            notes_link: '',
            wksht: '',
            wksht_link: '',
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            lessons: this.state.lessons.concat({
                name: this.state.name,
                notes: this.state.notes,
                notes_link: this.state.notes_link,
                worksheet: this.state.wksht,
                worksheet_link: this.state.wksht_link,
                quiz: this.state.quiz,
            }),
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>Add Lesson:
                    <div>
                        <label htmlFor="lesson_name_input">Lesson Name: </label>
                        <input id="lesson_name_input" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="lesson_notes_input">Lesson Notes: </label>
                        <input id="lesson_notes_input" name="notes" value={this.state.notes} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="lesson_notes_link_input">Lesson Notes Link: </label>
                        <input id="lesson_notes_link_input" name="notes_link" value={this.state.notes_link} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="lesson_wksht_input">Lesson Worksheet: </label>
                        <input id="lesson_wksht_input" name="wksht" value={this.state.wksht} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="lesson_wksht_link_input">Lesson Worksheet Link: </label>
                        <input id="lesson_wksht_link_input" name="wksht_link" value={this.state.wksht_link} onChange={this.handleChange} />
                    </div>
                    
                    <button>Add Lesson</button>
                </form>

                <div>
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
            </div>
        );
    }
}

export default AddLesson;
