import { GraphQLObjectType, GraphQLInputObjectType, GraphQLBoolean, GraphQLString, GraphQLNonNull, GraphQLList } from 'graphql';
import Quiz from './QuizType';
const mongoose = require('mongoose');

const Lesson = new GraphQLObjectType({
  name: 'Lesson',
  description: 'Self Descriptive',
  fields() {
    return {
      lessonName: {
        type: GraphQLString,
      },
      listOfQuizzes: {
      	type: new GraphQLNonNull(new GraphQLList(Quiz)),
      },
      listOfWorksheets: {
        type: new GraphQLNonNull(new GraphQLList(Worksheet)),
      },
      listOfNotes: {
        type: new GraphQLNonNull(new GraphQLList(Note)),
      },
    };
  },
});

export default Lesson;