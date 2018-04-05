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
