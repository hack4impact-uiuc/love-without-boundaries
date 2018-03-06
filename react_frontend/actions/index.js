
export const SET_USER_TYPE = 'CHANGE_USER_TYPE';

export const UserTypes = {
    STUDENT: 'STUDENT',
    TEACHER: 'TEACHER',
    ADMIN: 'ADMIN',
};

export const setUserType = (userType) => {
    return ({ type: SET_USER_TYPE, userType });
};

let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

