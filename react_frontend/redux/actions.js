/*
 * action types
 */
export const CHANGE_USER_TYPE = 'CHANGE_USER_TYPE';


/*
 * other types
 */

export const UserTypes = {
    STUDENT: 'STUDENT',
    TEACHER: 'TEACHER',
    ADMIN: 'ADMIN',
};

/*
 * action creators
 */

// this doesnt work when you import it...
export const changeUserType = (userType) => {
    return ({ type: CHANGE_USER_TYPE, userType });
};