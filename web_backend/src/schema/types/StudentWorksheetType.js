import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';

const globalId = mongoModelName => globalIdField(mongoModelName, obj => obj.id);

const StudentWorksheetType = new GraphQLObjectType({
    name: 'Worksheet',
    description: 'Student worksheet for a specific lesson',
    fields() {
        return {
            lessonID: {
                type: GraphQLString,
                description: 'id of the lesson this worksheet is associated with',
            },
            url: {
                type: GraphQLString,
                description: 'The URL of the worksheet',
            },
        };
    },
});

export default StudentWorksheetType;
