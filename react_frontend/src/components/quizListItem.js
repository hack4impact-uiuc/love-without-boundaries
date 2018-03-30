// @flow
// This was too buggy and is now unused
import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

const QuizListItem = props => (
    <div>{props.quiz.questions ? "hi" : "bye"}</div>
);

export default createFragmentContainer(
    QuizListItem,
    graphql`
        fragment quizListItem_question on Quiz {
            questions{
                questionName
            }
        }
    `,
);
