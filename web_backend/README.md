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