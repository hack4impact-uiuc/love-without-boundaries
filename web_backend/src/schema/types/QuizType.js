import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import QuestionType from './QuestionType';

const QuizType = new GraphQLObjectType({
    name: 'Quiz',
    description: 'Self Descriptive',
    fields() {
        return {
            name: {
                type: GraphQLString,
            },
            questions: {
                type: new GraphQLList(QuestionType),
            },
            lessonID: { type: GraphQLString },
        };
    },
});


export default QuizType;
