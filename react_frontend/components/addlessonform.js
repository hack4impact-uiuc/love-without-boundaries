import React from 'react';
import styled from 'styled-components';

type Props = {
    /**/ 
  }

class AddLessonForm extends React.Component<Props>{

    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default AddLessonForm;