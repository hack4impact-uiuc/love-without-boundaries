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
                    <AddLessonForm/>
                </form>

                <form onSubmit={this.props.handler}>Delete Lesson:
                   <DeleteLessonForm/>
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
