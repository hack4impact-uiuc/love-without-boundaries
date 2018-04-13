import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';

const globalId = mongoModelName => globalIdField(mongoModelName, obj => obj.id);

const StudentWorksheetType = new GraphQLObjectType({
    name: 'Worksheet',
    description: 'Student worksheet for a specific lesson',
    fields() {
        return {
            lessonID: globalId('Lesson'),
            url: {
                type: GraphQLString,
            },
        };
    },
});

export default StudentWorksheetType;
