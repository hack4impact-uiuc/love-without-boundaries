# Mutation Examples

## Create Student Mutation
```
mutation createStudent{
  createStudent(input: {
    name:"justin bieber", 
    email:"bieber2@illinois.edu",
  	}) {
    student {
        id
        name
	    email
    }
  }
}
```
Expected Result:
```
{
  "data": {
    "createStudent": {
      "student": {
        "id": "U3R1ZGVudDo1YWM1YTRjMWJlZGE5MjE1ODMwNDg3ZTA=",
        "name": "justin bieber",
        "email": "bieber2@illinois.edu"
      }
    }
  }
}
```
## Create Teacher Mutation
```
mutation createTeacher{
  createTeacher(input: {
    name:"steve herzog", 
    email:"steve@illinois.edu",
  	}) {
    teacher {
        id
      	name
        email
    }
  }
}
```
Expected Result:
```
{
  "data": {
    "createTeacher": {
      "teacher": {
        "id": "VGVhY2hlcjo1YWM1YTVlMmJlZGE5MjE1ODMwNDg3ZTE=",
        "name": "steve herzog",
        "email": "steve@illinois.edu"
      }
    }
  }
}
```
## Create Admin Mutation
```
mutation createAdmin{
  createAdmin(input: {
    name:"heather zike", 
    email:"zike@illinois.edu",
  	}) {
    admin {
        id
      	name
        email
    }
  }
}
```
Expected Result:
```
{
  "data": {
    "createAdmin": {
      "admin": {
        "id": "QWRtaW46NWFjNWE2MmRiZWRhOTIxNTgzMDQ4N2Uy",
        "name": "heather zike",
        "email": "zike@illinois.edu"
      }
    }
  }
}
```
## Create Lesson mutation
```
mutation createLesson{
  createLesson(input: {
    name:"Algebra", 
    quiz: {
      name: "Quiz 1",
      questions: [
        {
          questionName: "What is 1+1?",
          answers: [
            { answerName: "2",
              isCorrect: true, }, 
            { answerName: "3",
            	isCorrect: false,},
          ]
        },
        {
          questionName: "What is 2+2?",
          answers: [
            { answerName: "5",
              isCorrect: false, }, 
            { answerName: "4",
            	isCorrect: true,},
          ]
      	}
      ],
    },
    worksheetName: "Addition",
    worksheetURL: "www.addition.com",
    notesName: "Lesson 1",
    notesURL: "www.docs.google.com/lesson1/",
  	}) {
    lesson {
        id
      	name
        quiz {
          name
          questions {
            questionName
            answers {
              answerName
              isCorrect
            }
          }
        }
      worksheetName
      worksheetURL
      notesName
      notesURL
    }
  }
}
```
Expected Result:
```
{
  "data": {
    "createLesson": {
      "lesson": {
        "id": "TGVzc29uOjVhYzVhNzg0YmVkYTkyMTU4MzA0ODdlOQ==",
        "name": "Algebra",
        "quiz": {
          "name": "Quiz 1",
          "questions": [
            {
              "questionName": "What is 1+1?",
              "answers": [
                {
                  "answerName": "2",
                  "isCorrect": true
                },
                {
                  "answerName": "3",
                  "isCorrect": false
                }
              ]
            },
            {
              "questionName": "What is 2+2?",
              "answers": [
                {
                  "answerName": "5",
                  "isCorrect": false
                },
                {
                  "answerName": "4",
                  "isCorrect": true
                }
              ]
            }
          ]
        },
        "worksheetName": "Addition",
        "worksheetURL": "www.addition.com",
        "notesName": "Lesson 1",
        "notesURL": "www.docs.google.com/lesson1/"
      }
    }
  }
}
```
## Delete Admin Mutation
```
mutation deleteAdmin{
  deleteAdmin(input: { id: "QWRtaW46NWFjNWE2MmRiZWRhOTIxNTgzMDQ4N2Uy"} ){
		admin {
      id
      name
      email
    }
  }
}
```
Expected Result:
```
{
  "data": {
    "deleteAdmin": {
      "admin": {
        "id": "QWRtaW46NWFjNWE2MmRiZWRhOTIxNTgzMDQ4N2Uy",
        "name": "heather zike",
        "email": "zike@illinois.edu"
      }
    }
  }
}
```
## Add Grade Mutation
```
mutation addGrade{
  addGrade(input: { 
    id: "U3R1ZGVudDo1YWE1YTFlNTFkZjQxMTBlNjZlNjY0NWE=",
    lesson: "Midterm 1",
    score: 69
  	}	){
		student {
      id
      name
      grades {
        score
        lesson
      }
    }
  }
}
```
Expected Result:
```
{
  "data": {
    "addGrade": {
      "student": {
        "id": "U3R1ZGVudDo1YWE1YTFlNTFkZjQxMTBlNjZlNjY0NWE=",
        "name": "kiwiwiwiwi",
        "grades": []
      }
    }
  }
}
```
## Assign Student To Teacher Mutation
```
mutation assignStudentToTeacher{
  assignStudentToTeacher(input: { 
    studentID: "U3R1ZGVudDo1YWE1YTFlNTFkZjQxMTBlNjZlNjY0NWI=",
    teacherID: "VGVhY2hlcjo1YWM1YWVlYmQ5ZTZjNDFiNTQ3MmVmYmM="
  	}	){
		student {
      id
      name
      teacher {
        name
      }
    }
    teacher {
      id
      name
     
    }
  }
}
```
Expected Result:
```
BUGGY RIGHT NOW THE IDS ARE BROKEN
```
## Delete Teacher Mutation
```
mutation deleteTeacher{
	deleteTeacher(input: {
    id: "VGVhY2hlcjo1YWM1YTVlMmJlZGE5MjE1ODMwNDg3ZTE="}){
    teacher {
      id
      name
      students {
        name
      }
    }
  }
}
```
Expected Result:
```
{
  "data": {
    "deleteTeacher": {
      "teacher": {
        "id": "VGVhY2hlcjo1YWM1YTVlMmJlZGE5MjE1ODMwNDg3ZTE=",
        "name": "steve herzog",
        "students": []
      }
    }
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
## Submit Quiz Mutation
```
DOESNT WORK RIGHT NOW
```
```
DOESNT WORK RIGHT NOW
```
## Add Question Mutation
```
DOESNT WORK RIGHT NOW
```
```
DOESNT WORK RIGHT NOW
```
## Delete Lesson Mutation
```
mutation deleteLesson{
	deleteLesson(input: {
    id: "TGVzc29uOjVhYmRhNjlkZjE0M2IwMDYzMTNmMjM2Yw=="}){
    lesson {
      id
      name
    }
  }
}
```
Expected Result:
```
{
  "data": {
    "deleteLesson": {
      "lesson": {
        "id": "TGVzc29uOjVhYmRhNjlkZjE0M2IwMDYzMTNmMjM2Yw==",
        "name": "Past Tense"
      }
    }
  }
}
```
## Add Note Mutation
```
mutation addNote{
	addNote(input: {
    id: "TGVzc29uOjVhYzVhNzg0YmVkYTkyMTU4MzA0ODdlOQ==",
  	name: "Note 1",
    url: "note.com"
  	}){
    lesson {
      id
      name
      notesName
      notesURL
    }
  }
}
```
Expected Result:
```
{
  "data": {
    "addNote": {
      "lesson": {
        "id": "TGVzc29uOjVhYzVhNzg0YmVkYTkyMTU4MzA0ODdlOQ==",
        "name": "Algebra",
        "notesName": null,
        "notesURL": null
      }
    }
  }
}
```
## Delete Note Mutation
```
mutation deleteNote{
	deleteNote(input: {
    id: "TGVzc29uOjVhYzVhNzg0YmVkYTkyMTU4MzA0ODdlOQ==",
  	}){
    lesson {
      id
      name
      notesName
      notesURL
    }
  }
}
```
Expected Result:
```
{
  "data": {
    "deleteNote": {
      "lesson": {
        "id": "TGVzc29uOjVhYzVhNzg0YmVkYTkyMTU4MzA0ODdlOQ==",
        "name": "Algebra",
        "notesName": "Lesson 1",
        "notesURL": "www.docs.google.com/lesson1/"
      }
    }
  }
}
```
## Add Worksheet Mutation
```
mutation addWorksheet{
	addWorksheet(input: {
    id: "TGVzc29uOjVhYzVhNzg0YmVkYTkyMTU4MzA0ODdlOQ==",
  	name: "Worksheet 1",
    url: "worksheet.com",
  	}){
    lesson {
      id
      name
      worksheetURL
      worksheetName
    }
  }
}
```
Expected Result:
```
{
  "data": {
    "addWorksheet": {
      "lesson": {
        "id": "TGVzc29uOjVhYzVhNzg0YmVkYTkyMTU4MzA0ODdlOQ==",
        "name": "Algebra",
        "worksheetURL": "Worksheet 1",
        "worksheetName": "worksheet.com"
      }
    }
  }
}
```
## Delete Worksheet Mutation
```
mutation deleteWorksheet{
	deleteWorksheet(input: {
    id: "TGVzc29uOjVhYzVhNzg0YmVkYTkyMTU4MzA0ODdlOQ==",
  	}){
    lesson {
      id
      name
      worksheetURL
      worksheetName
    }
  }
}
```
Expected Result:
```
{
  "data": {
    "deleteWorksheet": {
      "lesson": {
        "id": "TGVzc29uOjVhYzVhNzg0YmVkYTkyMTU4MzA0ODdlOQ==",
        "name": "Algebra",
        "worksheetURL": null,
        "worksheetName": null
      }
    }
  }
}
```
## Add Student Worksheet Copy Mutation
```
mutation addStudentWorksheetCopy{
	addStudentWorksheetCopy(input: {
    studentID: "U3R1ZGVudDo1YWE1YTFlNTFkZjQxMTBlNjZlNjY0NWM=",
  	lessonID: "TGVzc29uOjVhYmRhNmMyZjE0M2IwMDYzMTNmMjM3MA==",
    url: "worksheet.com",
  	}){
    student {
      id
      name
			worksheets {
        url
      }
    }
  }
}
```
Expected Result:
```
{
  "data": {
    "addStudentWorksheetCopy": {
      "student": {
        "id": "U3R1ZGVudDo1YWE1YTFlNTFkZjQxMTBlNjZlNjY0NWM=",
        "name": "kiwiwiwiwi",
        "worksheets": []
      }
    }
  }
}
```
## Remove Student Worksheet Copy Mutation
```
mutation removeStudentWorksheetCopy{
	removeStudentWorksheetCopy(input: {
    studentID: "U3R1ZGVudDo1YWE1YTFlNTFkZjQxMTBlNjZlNjY0NWM=",
  	lessonID: "TGVzc29uOjVhYmRhNmMyZjE0M2IwMDYzMTNmMjM3MA==",
  	}){
    student {
      id
      name
			worksheets {
        url
      }
    }
  }
}
```
Expected Result:
```
{
  "data": {
    "removeStudentWorksheetCopy": {
      "student": {
        "id": "U3R1ZGVudDo1YWE1YTFlNTFkZjQxMTBlNjZlNjY0NWM=",
        "name": "kiwiwiwiwi",
        "worksheets": [
          {
            "url": "worksheet.com"
          }
        ]
      }
    }
  }
}
```
