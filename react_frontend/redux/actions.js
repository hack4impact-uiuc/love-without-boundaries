/*
 * Action Types
 */

export const CHANGE_USER_TYPE = 'CHANGE_USER_TYPE';

/*
 * Other Constants
 */
export const UserTypes = {
    NO_AUTH: 'NO_AUTH',
    STUDENT: 'STUDENT',
    TEACHER: 'TEACHER',
    ADMIN: 'ADMIN'
}

/*
 *  action creators
 */

export const changeUserType(userType) {
    return { type: CHANGE_USER_TYPE, userType }
}