import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

type Props = {
  /**/
}

const SlightlyPaddedButton = styled.button`
    margin: 0px 5px;
`;

class LessonComponent extends React.Component<Props> {
    render() {
        return (
            <div className="row" style={{ margin: '0 auto' }}>
                {/* <div className="col-md-3 col-sm-2" /> */}
                <div className="col-sm-6 lesson-box">
                    <h3 className="lesson-title" >{this.props.lessonName}</h3>
                    <div className="lesson-btn-box">
                        <div className="row">
                            <a href={this.props.lessonNotesLink}><SlightlyPaddedButton className="btn lesson-btn">Notes</SlightlyPaddedButton></a>
                            <a href={this.props.lessonWorksheetLink}><SlightlyPaddedButton style={{ marginLeft: '10px' }}className="btn lesson-btn">Worksheet</SlightlyPaddedButton></a>
                        </div>
                        <div className="row quiz-btn-box">
                            {
                                this.props.isStudent && (
                                    <Link key={this.props.key} to={{ pathname: '/takequiz', state: { lessonID: this.props.id } }}>
                                        <SlightlyPaddedButton className="btn lesson-btn"> Take Quiz </SlightlyPaddedButton>
                                    </Link>
                                )}

                            <Link to={{ pathname: '/reviewquiz', state: { lessonID: this.props.id } }}>
                                <SlightlyPaddedButton className="btn lesson-btn" > Review Quiz </SlightlyPaddedButton>
                            </Link>
                        </div>
                    </div>
                    {this.props.isStudent && (
                        <p className="lesson-quiz-text"> Quiz -- Grade: { this.props.quizPercentage !== undefined ? `${this.props.quizPercentage * 100}%` : 'Haven\'t taken' }</p>
                    )}
                    <p style={{ color: 'red' }}> { this.props.lessonWorksheetLink === undefined || this.props.lessonWorksheetLink === null ? 'Worksheet Copy doesnt have link' : ''} </p>
                </div>
                {/* <div className="col-md-3 col-sm-2" /> */}
            </div>
        );
    }
}

export default LessonComponent;
