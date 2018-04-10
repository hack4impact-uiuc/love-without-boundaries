import React from 'react';
import styled from 'styled-components';
import LessonComponent from './../components/lesson';
import {Button} from 'react-bootstrap';
import addLesson from '../relay/mutations/addLesson';
import environment from '../relay/environment';


class LessonForm extends React.Component {
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
                worksheet_link: this.state.wksht_link
            }),
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    submitLesson = (environment, name, notes, notesLink, wksht, wkshtLink) => {
        let fileID = function getIdFromUrl(url) { return url.match(/[-\w]{25,}/); }
        drive.permissions.create({
            auth: 'AIzaSyCNtUcu4OZGxB3o4R4lzFOvkIq7ozXycwo',
            fileId: fileID,
            access_token: 'ya29.GluVBb3QL11AkxZFShM7Qp1bScwIa3Noe9ZBVBIl4-y7QRb4mlKgrO2Z0vbI_U76eeYDpyMvf4gHYKXvmEBXhsC2LhYR-f3b2w00ehZBNLN4XgbmG8-KIzZLAYwE',
            role: 'reader',
            type: 'anyone'
        }, (err, response) => {
            if (err) {
                console.error(err);
                throw err;
            }
            console.log(response.data.displayName);
        });
        addLesson(environment, this.state.name, this.state.notes, this.state.notes_link, this.state.wksht, this.state.wksht_link)
    }

    render() {
        return (
            <div>
                <form onSubmit={() => addLesson(environment, this.state.name, this.state.notes, this.state.notes_link, this.state.wksht, this.state.wksht_link)}>Add Lesson:
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
                </div>
            </div>
        );
    }
}

export default LessonForm;
