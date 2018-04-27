import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

type Props = {
  /**/
}

const LessonTitle = styled.div`
    border-bottom-style: solid;
    border-color: white;
    color: white;
    padding: 10px;
    font-size: 35px;
    text-align: right;
    z-index = -1;
    margin: 20px;
`;

const LessonProps = styled.div`
    border-style: solid;
    border-color: white;
    color: #337ab7;
    padding: 5px 5px;
    margin: 5px 5px;
    font-size: 20px;
    text-align: center;
    border-radius: 0px;
    background-color: white;
    height: 50px;
    z-index: -1;
    border-radius: 0px 30px;

`;

const CheckedBoxComplete = styled.div`
    display: inline-block;
    margin-left: 3px;
    margin-bottom: 1px;
    border-style: solid;
    border-color: green;
    color: white;
    font-size: 30px;
    background-color: green;
    height: 25px;
    width: 25px;
    z-index: 100;
`;

const CheckedBoxInComplete = styled.div`
    float: right;
    float:top;
    border-style: solid;
    border-color: red;
    height: 25px;
    width: 25px;
    background-color: red;
    z-index: 100;
`;

const SlightlyPaddedButton = styled.button`
    margin: 0px 5px;
`;

class LessonComponent extends React.Component<Props> {
    render() {
        return (
            <div className="row">
                <div className="col-md-3 col-sm-2" />
                <div className="col-sm-6 lesson-box">
                    <h3 className="lesson-title" >{this.props.lessonName}</h3>
                    <div className="lesson-btn-box">
                        <div className="row">
                            <a href={this.props.lessonNotesLink}><SlightlyPaddedButton className="btn lesson-btn">Notes</SlightlyPaddedButton></a>
                            <a href={this.props.lessonWorksheetLink}><SlightlyPaddedButton style={{ marginLeft: '10px' }}className="btn lesson-btn">Worksheet</SlightlyPaddedButton></a>
                        </div>
                        <div className="row quiz-btn-box">
                            {/* {this.props.isStudent && */} (
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
                        <p className="lesson-quiz-text"> Quiz -- Grade: {this.props.quizPercentage}</p>
                    )}
                    <p style={{ color: 'red' }}> { this.props.lessonWorksheetLink === undefined || this.props.lessonWorksheetLink === null ? 'Worksheet Copy doesnt have link' : ''} </p>
                </div>
                <div className="col-md-3 col-sm-2" />
            </div>
        );
    }
}

export default LessonComponent;
