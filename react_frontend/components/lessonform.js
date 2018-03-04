import * as React from 'react';
import styled from 'styled-components';
import LessonComponent from './../components/lesson';
import StudentPage from '../pages/StudentPage';

class AddLessonForm extends React.Component {
    constructor() {
        super();
        this.state = {
            Lessons: [],
            name: '',
            notes: '',
            wksht: '',
            quiz: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = event.target;
        this.setState({
            Lesson: this.state.Lessons.push({
                Name: this.state.name,
                Notes: this.state.notes,
                Worksheet: this.state.wksht,
                Quiz: this.state.quiz,
            }),
        });
        <StudentPage lessonName={lesson.Name} lessonNotes={lesson.Notes} worksheetName={lesson.Worksheet} quizName={lesson.Quiz} />
        console.log(this.state.Lessons);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="Lesson Name">Lesson Name</label>
                    <input id="Lesson Name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />

                    <label htmlFor="Lesson Notes">Lesson Notes</label>
                    <input id="Lesson Notes" name="notes" type="text" value={this.state.notes} onChange={this.handleChange} />

                    <label htmlFor="Lesson Wksht">Lesson Worksheet</label>
                    <input id="Lesson Wksht" name="wksht" type="text" value={this.state.wksht} onChange={this.handleChange} />

                    <label htmlFor="Lesson Wksht">Lesson Quiz</label>
                    <input id="Lesson Wksht" name="quiz" type="text" value={this.state.quiz} onChange={this.handleChange} />

                    <button>Add Lesson</button>
                </form>

                <div>
                    <div>
                        {
                            this.state.Lessons.map(lesson => (
                                <LessonComponent lessonName={lesson.Name} lessonNotes={lesson.Notes} worksheetName={lesson.Worksheet} quizName={lesson.Quiz} />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}


export default AddLessonForm;
