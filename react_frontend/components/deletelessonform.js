import React from 'react';
import styled from 'styled-components';

type Props = {
    /**/ 
  }

class DeleteLessonForm extends React.Component<Props>{

    render() {
        return (
            <form onSubmit={this.props.handler}>Delete Lesson:
                <div>
                    <label htmlFor="delete_lesson_id">ID:</label>
                    <input id="delete_lesson_id" name="delete_id" type="text" value={this.state.delete_id} onChange={this.handleChange} />
                </div>
                <div>
                    <button>Delete Lesson</button>
                </div>
            </form>
        );
    }
}

export default DeleteLessonForm;