const initialState = {
    showUserForm: false,
    users: [],
    isEditing: false,
    editUser: []
}

const Reducer = (state = initialState, action = '') => {
    switch(action.type) {
        case 'USER_FORM':
            return Object.assign({}, state, { showUserForm: true });
        case 'ADD_USER':
            return Object.assign({}, state, { users: [ ...state.users, {
                'id': state.users.length + 1,
                'name': action.name,
                'email': action.email,
            } ], showUserForm: false });
        case 'DELETE_USER':
            if(state.users.length > 0){
                const filteredUser = state.users.filter((user) => user.id !== parseInt(action.delId) );
                return Object.assign({}, state, { users: filteredUser });
            } else {
                return state;
            }
        case 'SEARCH_USER':
            const regex = new RegExp(`^${action.searchText }`, 'g');
            const searchUser = state.users.filter((user) => user.name.match(regex));
            return Object.assign({}, state, { users: searchUser });
        case 'EDIT_USER':
            const editedUSer = state.users.filter( (user) => user.id === parseInt(action.editId) );
            return Object.assign({}, state, { editUser: editedUSer, isEditing: true });
        case 'UPDATE_USER':
            return state.users.map((user) => {
                if(user.id === parseInt(action.editid)) {
                    return Object.assign({}, state, { users: { "name" : action.name, "email" : action.email  }, isEditing: false });
                } else {
                    return Object.assign({}, state, { users: state.users, isEditing: false });;
                }
            })
        default:
            return state;
    }
}

export default Reducer