import React from 'react'
import { connect } from 'react-redux'

import './App.css'
import UserListing from './component/UserListing'
import AddUser from './component/AddUser'
import EditUser from './component/EditUser'

const App = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="left-wrap">
          <form method="post" onSubmit={props.handleSerch}>
            <input type="text" name="search" />
            <input type="submit" value="Search" />
          </form>
          <div className="add-user">
            <button onClick={props.handleUserAdd}>Add User</button>
          </div>
        </div>
        <div className="right-wrap">
          { props.showUserForm ? <AddUser /> : '' }
          
          <UserListing />
          { props.isEditing ? <EditUser /> : ''  }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    showUserForm: state.showUserForm,
    users: state.users,
    addUser: state.addUser,
    isEditing: state.isEditing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUserAdd: () => {
      dispatch({ type: 'USER_FORM' });
    },
    handleSerch: (e) => {
      e.preventDefault();
      dispatch({ type: 'SEARCH_USER', searchText: e.target.search.value });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
