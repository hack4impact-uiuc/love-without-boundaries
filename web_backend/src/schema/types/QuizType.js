import { GraphQLObjectType, GraphQLBoolean, GraphQLString, GraphQLNonNull, GraphQLList } from 'graphql';
import mongoose from 'mongoose';
import QuestionType from "./QuestionType"

const QuizType = new GraphQLObjectType({
    name: 'Quiz',
    description: 'Self Descriptive',
    fields() {
        return {
            name: {
                type: GraphQLString,
            },
            questions: {
                type: new GraphQLList(QuestionType)
            },
            lessonID: {type: GraphQLString}
        };
    },
});


export default QuizType;