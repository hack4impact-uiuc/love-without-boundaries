import { GraphQLInputObjectType, GraphQLString, GraphQLList } from 'graphql';
import InputAnswer from './InputAnswerType';

const InputQuestion = new GraphQLInputObjectType({
    name: 'InputQuestion',
    description: 'Self Descriptive',
    fields() {
        return {
            questionName: {
                type: GraphQLString,
            },
            answers: {
                type: new GraphQLList(InputAnswer),
            },
        };
    },
});

export default InputQuestion;
