import * as React from 'react';
import styled from 'styled-components';
import LessonComponent from './../components/lesson';

class LessonForm extends React.Component {
    constructor() {
        super();
        this.state = {
            lessons: [],
            name: '',
            notes: '',
            wksht: '',
            quiz: '',
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            lessons: this.state.lessons.concat({
                name: this.state.name,
                notes: this.state.notes,
                worksheet: this.state.wksht,
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
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="lesson_name_input">Lesson Name: </label>
                        <input id="lesson_name_input" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="lesson_notes_input">Lesson Notes: </label>
                        <input id="lesson_notes_input" name="notes" type="text" value={this.state.notes} onChange={this.handleChange} />
                    </div>
                    
                    <div>
                        <label htmlFor="lesson_wksht_input">Lesson Worksheet: </label>
                        <input id="lesson_wksht_input" name="wksht" type="text" value={this.state.wksht} onChange={this.handleChange} />
                    </div>
                    
                    <div>
                        <label htmlFor="lesson_quiz_input">Lesson Quiz: </label>
                        <input id="lesson_quiz_input" name="quiz" type="text" value={this.state.quiz} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button>Add Lesson</button>
                    </div>
                </form>

                <div>
                    <div>
                        {
                            this.state.lessons.map(lesson => (
                                <LessonComponent lessonName={lesson.name} lessonNotes={lesson.notes} worksheetName={lesson.worksheet} quizName={lesson.quiz} />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default LessonForm;
