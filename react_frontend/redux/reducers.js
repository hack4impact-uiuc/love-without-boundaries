import { UserTypes, CHANGE_USER_TYPE } from './actions';

const initialState = {
    userType: UserTypes.NO_AUTH,
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
    case CHANGE_USER_TYPE:
        return Object.assign({}, state, {
            visibilityFilter: action.filter,
        });
    default:
        return state;
    }
}
