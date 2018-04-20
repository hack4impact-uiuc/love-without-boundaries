import React from 'react';
import GoogleDocButton from './googleDocButton';
import LessonComponent from './lesson';
import addStudentWorksheetCopy from '../relay/mutations/addStudentWorksheetCopy';
import { copyFile } from '../Gapi';
import environment from '../relay/environment';



class StudentLesson extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            worksheetIDs: [],
            lessonIDs: []
        }
    }

    componentDidMount() {
        const studentWorksheetLessonIDs = this.props.studentWorksheets.worksheets.map(element => {
            return element.lessonID
        })
        let i;
        for (i = 0; i < this.props.lessons.length; i++) {
            if (!(studentWorksheetLessonIDs.includes(this.props.lessons[i].id))) {
                addStudentWorksheetCopy(environment, this.props.location.state.student.id, this.props.lessons[i].id, this.props.lessons[i].worksheetURL)
                let url = this.props.lessons[i].worksheetURL
                let fileId = url.match(/[-\w]{25,}/)
                console.log(fileId)
                copyFile(fileId)
            }
        }
        console.log(this.props.lessons.map(element => {
            return element.id
        }))
        console.log(studentWorksheetLessonIDs)
        
    }
    
    updateLessons = (studentWorksheetLessonIDs, lessonIDs, url) => {
        let i;
    }
    // cleanData = () => {
    //     const temp1 = this.props.lessons.map(element => {
    //         return element.id
    //     })
    //     const temp2 = this.props.studentWorksheets.worksheets.map(element => {
    //         return element.lessonID
    //     })
    //     console.log(temp1)
    //     console.log(temp2)
    //     this.setState({
    //         worksheetIDs: temp2,
    //         lessonIDs: temp1
    //     })
    // }
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
