

## Examples

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

```
mutation m {
  addGrade(id:"5aa1a24b9a2c0da67ebdc1ef", lesson: "verbs", score:100) {
    id
}
```

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

```
mutation m{
	createTeacher(name: "Aria", email: "aria@gmail.com") {
    id
    name
    email
  }
}
```

```
{
  teacher {
    id
    email
    name
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


```
mutation m {
  assignStudentToTeacher(studentID:"5aa1a24b9a2c0da67ebdc1ef", teacherID: "5aa1a71837b5d2ac3f35dcde") {
		id
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