import { GraphQLInputObjectType, GraphQLList } from 'graphql';
import AnsweredQuestionType from './AnsweredQuestionType';

const AnsweredQuestions = new GraphQLInputObjectType({
    name: 'InputSubmittedAnswers',
    description: 'Self Descriptive',
    fields() {
        return {
            submissions: { type: new GraphQLList(AnsweredQuestionType) }
        };
    },
});

export default AnsweredQuestions;
