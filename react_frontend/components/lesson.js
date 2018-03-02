import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**/ 
}
const LessonDiv = styled.div`
    border-style: solid;
    border-color: red;
    height: 300px;
    width: 400px;
`;
class LessonComponent extends React.Component<Props>{
    render() {
        return(
            <LessonDiv>This is a lesson with buttons to notes, worksheets, quizzes</LessonDiv>
        );
    }

}


class AddLessonForm extends React.Component {
    constructor() {
        super();
        this.state = {Lessons: [],
                      newLessonName: '',
                      newLessonNotes: '',
                      newLessonWksht: '',
                      newLessonQuiz: ''
                     }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        this.setState(
            {
                Lesson: this.state.push(data)
            }
        )
    }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="Lesson Name">Lesson Name</label>
                <input id="Lesson Name" name="Lesson Name" type="text" />
  
                <label htmlFor="Lesson Notes">Lesson Notes</label>
                <input id="Lesson Notes" name="Lesson Notes" type="text" />
  
                <label htmlFor="Lesson Wksht">Lesson Worksheet</label>
                <input id="Lesson Wksht" name="Lesson Wksht" type="text" />

                <label htmlFor="Lesson Wksht">Lesson Worksheet</label>
                <input id="Lesson Wksht" name="Lesson Wksht" type="text" />

                <button>Add Lesson</button>
            </form>
      );
    }
  }





// class AddLessonForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {Lessons: [],
//                       newLessonName: '',
//                       newLessonNotes: '',
//                       newLessonWksht: '',
//                       newLessonQuiz: ''
//                     }
//         this.handleInputChange = this.handleInputChange.bind(this);
//     }

//     handleInputChange(event) {
//         const target = event.target;
//         const name = target.name;

//         this.setState({
//         [name]: value
//         });
//     }

//     onSubmit(event) {
//         const lessons = this.state.Lessons;
//         this.setState({
//             Lessons: this.state.Lessons.push( { Name: event.target.name,
//                                                 Notes: event.target.notes,
//                                                 Wksht: event.target.wksht,
//                                                 Quiz: event.target.quiz} 
//                                             )
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <form >
//                 <label>
//                     Lesson Name:
//                     <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label>

//                 <button onClick={this.onSubmit}>Add Lesson</button>
//                 {this.state.Lessons.map(function(input, index) {
//                     return (<LessonComponent lessonName = {this.state.newLessonName}
//                                              lessonNotes = {this.state.newLessonNotes}
//                                              worksheetName = {this.state.newLessonWksht}
//                                              quizName = {this.state.newLessonQuiz}> ) 
//                 })}
//                 </form>
//             </div>
//         );
//     }
// }

export default LessonComponent;
