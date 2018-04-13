import React from 'react';
import styled from 'styled-components';
import LessonComponent from './../components/lesson';
import {Button} from 'react-bootstrap';
import { graphql, QueryRenderer } from 'react-relay';
import addLesson, { mutation as addLessonMutation } from '../relay/mutations/addLesson';
import addStudentWorksheetCopy from '../relay/mutations/addStudentWorksheetCopy'
import environment from '../relay/environment';
import { getFileInfo, setPermissionToAllRead, copyFile, setPermissionToAllEdit, getIdFromUrl } from '../Gapi';
import { commitMutation } from 'react-relay';

class LessonForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            notes: '',
            notes_link: '',
            wksht: '',
            wksht_link: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    submitLesson = (e, students) => {
        e.preventDefault();
        const NotesFileID = getIdFromUrl(this.state.notes_link);
        const WkshtFileID = getIdFromUrl(this.state.wksht_link);
        if (!NotesFileID || !WkshtFileID) {
            alert("Please Insert Notes Link and Worksheet Link");
        }
        // TODO: Check whether NotesFileId, WksfhtFileID are NULL
        const variables = {
            input: {
                name: this.state.name,
                worksheetName: this.state.wksht,
                worksheetURL: this.state.wksht_link,
                notesName: this.state.notes,
                notesURL: this.state.notes_link
            }
        }
        commitMutation(
            environment,
            {
                mutation: addLessonMutation,
                variables,
                onCompleted: (res, err) => {
                    if (!err){
                        try {
                            // get new lesson id
                            const newLessonID = res.createLesson.lesson.id;
                            // loop through students and add worksheet Copy to each student
                            students.map((student) => {
                                copyFile(WkshtFileID[0]).then(cres => {
                                    console.log(cres);
                                    if (cres.error) {
                                        alert('Please check whether your Worksheet file can be viewed to anyone with the link, or check if the file is in the shared LWB google drive folder.');
                                    }
                                    else {
                                        const newFileID = cres.id;
                                        setPermissionToAllEdit(newFileID).then(res3 => {
                                            if (res3.error){
                                                alert('Failed to set Permission To all Edit. Please manuall');
                                            }
                                            else{
                                                console.log('permission set to all edit');
                                                // TODO: write succeed message using state
                                            }
                                        })
                                    }
                                });
                                addStudentWorksheetCopy(environment, student.id, newLessonID, this.state.wksht_link)
                            });
                            // set permissions for the file
                            setPermissionToAllRead(NotesFileID[0]);
                            setPermissionToAllRead(WkshtFileID[0]);
                        } catch (err) {
                            console.log(err)
                            alert('Adding Lesson Failed. Try again.');
                        }
                    }
                    else {
                        console.log(err);
                    }
                },
                onError: err => console.error(err),
            },
        );
       
        this.setState({
            name: '',
            notes: '',
            notes_link: '',
            wksht: '',
            wksht_link: '',
        });
    }

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query lessonform_Query{
                        students{
                            id
                        }
                    }  
                `}
                variables={{}}
                render={({ props }) => {
                    if (!props) {
                        return (
                            <div>Loading...</div>
                        );
                    }
                    return (
                        <div>
                            <form>
                                Add Lesson:
                                <div>
                                    <label htmlFor="lesson_name_input">Lesson Name: </label>
                                    <input id="lesson_name_input" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                                </div>

                                <div>
                                    <label htmlFor="lesson_notes_input">Lesson Notes: </label>
                                    <input id="lesson_notes_input" name="notes" value={this.state.notes} onChange={this.handleChange} />
                                </div>

                                Please make sure that Notes File is viewable to everyone with the link and is in the Shared LWB Google Drive Folder
                                <div>
                                    <label htmlFor="lesson_notes_link_input">Lesson Notes Link: </label>
                                    <input id="lesson_notes_link_input" name="notes_link" value={this.state.notes_link} onChange={this.handleChange} />
                                </div>

                                <div>
                                    <label htmlFor="lesson_wksht_input">Lesson Worksheet: </label>
                                    <input id="lesson_wksht_input" name="wksht" value={this.state.wksht} onChange={this.handleChange} />
                                </div>

                                Please make sure that Worksheets File is viewable to everyone with the link and is in the Shared LWB Google Drive Folder
                                <div>
                                    <label htmlFor="lesson_wksht_link_input">Lesson Worksheet Link: </label>
                                    <input id="lesson_wksht_link_input" name="wksht_link" value={this.state.wksht_link} onChange={this.handleChange} />
                                </div>
                    
                                <button onClick={(e) => this.submitLesson(e, props.students)}>Add Lesson</button>
                            </form>
                        <div>
                            
                        </div>
                        </div>
                    );
                }}
            />
        );
    }
}

export default LessonForm;
