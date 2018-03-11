# Examples

## Create Student Mutation
```
mutation createStudent{
  createStudent(name:"tim", email:"tk2@illinois.edu") {
    id
    email
    name
    teacherID
    grades {
      lesson
      score
    }
  }
}
```
Expected Result:
```
{
  "data": {
    "createStudent": {
      "id": "5aa1c0ffd4b2411148869faa",
      "email": "tk2@illinois.edu",
      "name": "tim",
      "teacherID": null,
      "grades": []
    }
  }
}
```
## Add Grade Mutation
```
mutation m {
  addGrade(id:"5aa1a24b9a2c0da67ebdc1ef", lesson: "verbs", score:100) {
    id
  }
}
```
Expected Result:
```
{
  "data": {
    "addGrade": {
      "id": "5aa1a24b9a2c0da67ebdc1ef"
    }
  }
}
```
## Student Query
```
query getStudents{
  students {
    id
    email
    name
    teacherID
    grades{
      lesson
      score
    }
  }
}
```
Expected Result:
```
{
  "data": {
    "students": [
      {
        "id": "5aa1a24b9a2c0da67ebdc1ef",
        "email": "tk2@illinois.edu",
        "name": "tim",
        "teacherID": null,
        "grades": [
          {
            "lesson": "verbs",
            "score": 100
          },
          {
            "lesson": "nouns",
            "score": 100
          }
        ]
      }
    ]
  }
}
```
## Create Teacher mutation
```
mutation m{
	createTeacher(name: "Aria", email: "aria@gmail.com") {
    id
    name
    email
  }
}
```
Expected Result:
```
{
  "data": {
    "createTeacher": {
      "id": "5aa1c1dfd4b2411148869fac",
      "name": "Aria",
      "email": "aria@gmail.com"
    }
  }
}
```
## Assign Student to Teacher
```
mutation m {
  assignStudentToTeacher(studentID:"5aa1a24b9a2c0da67ebdc1ef", teacherID: "5aa1a71837b5d2ac3f35dcde") {
		id
  }
}
```
Expected Result:
```
{
  "data": {
    "assignStudentToTeacher": {
      "id": "5aa1a71837b5d2ac3f35dcde"
    }
  }
}
```


```
{
  teacher {
    id
    email
    name
    listOfStudentIDs
  }
}
```


```
{
  "data": {
    "teacher": [
      {
        "id": "5aa1a71837b5d2ac3f35dcde",
        "email": "aria@gmail.com",
        "name": "Aria"
      }
    ]
  }
}
```
## Quiz Stuff
```
query q{
  quiz{
    id
    name
    questions{
    	questionName
      answers {
        answerName
        isCorrect
      }
    }
  }
}
```
```
mutation create{
  createQuiz(name: "queez"){
    name
  }
}
```
```
mutation delete{
  deleteQuiz(id: "5aa227a5a4ba471a30c382c7"){
    name
  }
}
```
```
mutation add{
  addQuestion(id: "5aa227d4a4ba471a30c382c8", question: {questionName: "q1", answers: {answerName: "A", isCorrect: false}}) {
    name
  }
}
```
```
mutation m {
  deleteQuiz(id:"5aa227d7a4ba471a30c382c9" ) {
    name
  }
}
```
## Lesson Stuff
```
query allLessons{
  lessons
  {
    name
    id
    quiz
    notesName
    notesURL
    worksheetName
    worksheetURL
  }
}
```
```
mutation createLesson {
  createLesson(name: "Nouns", quiz: "Nouns Quiz", worksheetName: "Nouns Worksheet", notesName: "Noun Notes") {
    id
    name
    quiz
    worksheetName
    worksheetURL
    notesName
    notesURL
  }
}
```
```
mutation addNote {
  addNote(id: "Lesson ID goes here", name: "Noun Notes", URL: "URL goes here") {
    id
    notesName
    notesURL
  }
}
```
```
mutation addWorksheet {
  addNote(id: "Lesson ID goes here", name: "Noun Worksheet", URL: "URL goes here") {
    id
    worksheetName
    worksheetURL

  }
}
```
```
mutation deleteLesson {
  deleteLesson(id: "Lesson ID goes here") {
    id
  }
}
```
```
mutation deleteNote {
  deleteNote(id: "Lesson ID goes here") {
    id
  }
}
```
mutation deleteWorksheet {
  deleteWorksheet(id: "Lesson ID goes here") {
    id
  }
}
```