import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const Grade = new GraphQLObjectType({
    name: 'Grade',
    description: 'Grade received on a quiz',
    fields() {
        return {
            lessonID: {
                type: GraphQLString,
                description: 'The name of the lesson that the grade is for',
            },
            score: {
                type: GraphQLInt,
                description: 'The grade in which the student received for this leeson',
            },
        };
    },
});

export default Grade;
