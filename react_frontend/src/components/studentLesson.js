import React from 'react';
import GoogleDocButton from './googleDocButton';
import LessonComponent from './lesson';
import addStudentWorksheetCopy from '../relay/mutations/addStudentWorksheetCopy';
import { copyFile } from '../Gapi';


class StudentLesson extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            worksheetIDs: [],
            lessonIDs: []
        }
    }
    
    updateLessons = (studentWorksheetLessonIDs, lessonIDs, url) => {
        let i;
        for (i = 0; i < lessons.length; i++) {
            if (!studentWorksheetLessonIDs.includes(lessonIDs[i])) {
                addStudentWorksheetCopy(this.props.location.student.id, lessonIDs[i], url)
                //TODO: Clean URL
                copyFile(url);
            }
        }
    }
    cleanData = () => {
        const temp1 = this.props.lessons.map(element => {
            return element.id
        })
        const temp2 = this.props.studentWorksheets.map(element => {
            return element.lessonID
        })
        this.setState({
            worksheetIDs: temp2,
            lessonIDs: temp1
        })
    }
    render() {
        return (
            //TODO: Call Functions
            <div className="container-fluid">
                <h2>
                    {
                        this.props.location.state != undefined ? `${this.props.location.state.student.name}'s Lessons` : 'My Lessons - Student isnt logged in aka nonexisting user- showing this for development purposes'
                    }
                </h2>
                <GoogleDocButton url="https://docs.google.com/document/d/1EGbrZFxY33xyEZdLyXmKGdWi5NR4CL7nS4C_7HzhSgE/edit" />
                {
                    this.props.lessons.map((lesson, idx) => (
                        <LessonComponent key={idx}id={lesson.id} lessonName={lesson.name} lessonNotes={lesson.notesName} lessonNotesLink={lesson.notesURL} lessonWorksheetLink={lesson.worksheetURL} worksheetName={lesson.worksheetName} quizName={lesson.quiz} quizPercentage="50%" quizIsChecked={false} isTeacher={this.state.isTeacher} />
                    ))
                }
            </div>
        );
    }
}

export default StudentLesson;
