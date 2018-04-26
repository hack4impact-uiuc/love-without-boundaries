import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import QuestionType from './QuestionType';

const QuizType = new GraphQLObjectType({
    name: 'Quiz',
    description: 'Quiz with multiple questions',
    fields() {
        return {
            name: {
                type: GraphQLString,
                description: 'The name of the quiz',
            },
            questions: {
                type: new GraphQLList(QuestionType),
                description: 'The list of questions for the quiz',
            },
            lessonID: {
                type: GraphQLString,
                description: 'The id of the lesson this quiz is associated with',
            },
        };
    },
});


export default QuizType;
