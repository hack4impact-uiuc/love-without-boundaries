import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList } from 'graphql';
import Quiz from './QuizType';
import mongoose from 'mongoose';

const LessonType = new GraphQLObjectType({
  name: 'Lesson',
  description: 'Lesson',
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

export default LessonType;