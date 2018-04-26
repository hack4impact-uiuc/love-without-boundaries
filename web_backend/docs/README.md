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
{
  "data": {
    "assignStudentToTeacher": {
      "student": {
        "id": "U3R1ZGVudDo1YWNlZTg2M2VhNWM3NDQ2MjEzZDdkYTA=",
        "name": "JUSTINBEIBS",
        "teacher": null
      }
    }
  }
}
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
## Submit Quiz Mutation
```
mutation submit{
  submitQuiz(input:{id: "U3R1ZGVudDo1YWNhNmNiZmQ1NTYzODcwODAwZWQzZjk=", 
    				 lessonID: "TGVzc29uOjVhY2E2OWQ0OWE2NDY5NjY4MTIzZDkyOA==",
    				 questions: ["Who is Tim?"],
  					 answers: ["Yes."]
  }) {
    student {
      name
      id
      pastQuizzes {
        quizName
        score
        submittedAnswers {
          answerChosen
        }
      }
  	}
  }
}
```
```
{
  "data": {
    "submitQuiz": {
      "student": {
        "name": "hana",
        "id": "U3R1ZGVudDo1YWNhNmNiZmQ1NTYzODcwODAwZWQzZjk=",
        "pastQuizzes": [
          {
            "quizName": "verbs",
            "score": 0,
            "submittedAnswers": [
              {
                "answerChosen": "No answer selected"
              },
              {
                "answerChosen": "No answer selected"
              },
              {
                "answerChosen": "No answer selected"
              }
            ]
          },
          {
            "quizName": "verbs",
            "score": 0.3333333333333333,
            "submittedAnswers": [
              {
                "answerChosen": "Yes."
              },
              {
                "answerChosen": "Yes."
              },
              {
                "answerChosen": "Yes."
              }
            ]
          },
          {
            "quizName": "verbs",
            "score": 0.3333333333333333,
            "submittedAnswers": [
              {
                "answerChosen": "Yes."
              },
              {
                "answerChosen": "Yes."
              },
              {
                "answerChosen": "Yes."
              }
            ]
          },
          {
            "quizName": "verbs",
            "score": 0.3333333333333333,
            "submittedAnswers": [
              {
                "answerChosen": "Yes."
              },
              {
                "answerChosen": "Yes."
              },
              {
                "answerChosen": "Yes."
              }
            ]
          },
          {
            "quizName": "verbs",
            "score": 0.3333333333333333,
            "submittedAnswers": [
              {
                "answerChosen": "Yes."
              },
              {
                "answerChosen": "Yes."
              },
              {
                "answerChosen": "Yes."
              }
            ]
          },
          {
            "quizName": "verbs",
            "score": 0.3333333333333333,
            "submittedAnswers": [
              {
                "answerChosen": "Yes."
              },
              {
                "answerChosen": "Yes."
              },
              {
                "answerChosen": "Yes."
              }
            ]
          }
        ]
      }
    }
  }
}
```
## Add Question Mutation
```
mutation addQuestion{
  addQuestion(input:{
    				 lessonId: "TGVzc29uOjVhYzVhNzg0YmVkYTkyMTU4MzA0ODdlOQ==",
    				 question: {
              questionName: "Who is Tim?",
              answers: [{
                answerName: "Yes.",
                isCorrect: true
              }]
            }
  }) {
    lesson {
      name
      id
      quiz{
        questions {
          questionName
        }
      }
  	}
  }
}
```
Expected Result:
```
{
  "data": {
    "addQuestion": {
      "lesson": {
        "name": "Algebra",
        "id": "TGVzc29uOjVhYzVhNzg0YmVkYTkyMTU4MzA0ODdlOQ==",
        "quiz": {
          "questions": [
            {
              "questionName": "What is 1+1?"
            },
            {
              "questionName": "What is 2+2?"
            },
            {
              "questionName": "Who is Tim?"
            }
          ]
        }
      }
    }
  }
}
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
## Delete Student Mutation
```
mutation deleteStudent{
	deleteStudent(input: {
    id: "U3R1ZGVudDo1YWE1YTFlNTFkZjQxMTBlNjZlNjY0NWQ="}){
    student {
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
    "deleteStudent": {
      "student": {
        "id": "U3R1ZGVudDo1YWE1YTFlNTFkZjQxMTBlNjZlNjY0NWQ=",
        "name": "kiwiwiwiwi"
      }
    }
  }
}
```
## Add URL Mutation
```
mutation addURL{
  addURL(input:{id: "U3R1ZGVudDo1YWNhOTU4NDVkNTM3ODc4ZDQ1YjVlNWQ=",
  							url: "www.meetspin.com"
  							}){
    student{
      name
      id
      URL
    }
  }
}
```
Expected Result:
```
{
  "data": {
    "addURL": {
      "student": {
        "name": "shreyas",
        "id": "U3R1ZGVudDo1YWNhOTU4NDVkNTM3ODc4ZDQ1YjVlNWQ=",
        "URL": "www.meetspin.com"
      }
    }
  }
}
```
## Delete Question Mutation
```
mutation deleteQuestion{
	deleteQuestion(input: {
    lessonId: "TGVzc29uOjVhZGZiMTA0OGQzNzM3MDNhYjA1MTM2Nw==",
  	questionId: "5adfb1048d373703ab051366"}){
    lesson {
      id
      name
      quiz{
        questions{
          id
        }
      }
    }
  }
}
```
Expected Result:
```
{
  "data": {
    "deleteQuestion": {
      "lesson": {
        "id": "TGVzc29uOjVhZGZiMTA0OGQzNzM3MDNhYjA1MTM2Nw==",
        "name": "Algebra",
        "quiz": {
          "questions": [
            {
              "id": "5adfb1048d373703ab051366"
            },
            {
              "id": "5adfb1048d373703ab051363"
            }
          ]
        }
      }
    }
  }
}
```
## Edit Lesson Mutation
```
mutation editLesson{
  editLesson(input:{
    id: "TGVzc29uOjVhZGZiMTA0OGQzNzM3MDNhYjA1MTM2Nw==",
    newName: "Irregular Verbs"
  }) {
    lesson {
      name
    }
  }
}
```
Expected Result:
```
{
  "data": {
    "editLesson": {
      "lesson": {
        "name": "Algebra"
      }
    }
  }
}
```