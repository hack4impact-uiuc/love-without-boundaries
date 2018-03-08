

## Examples

mutation m {
  createStudent(name:"tim", email:"tk2@illinois.edu") {
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

{
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