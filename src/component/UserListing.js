import React from 'react'
import { connect } from 'react-redux'

const UserListing = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.map((user) => 
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={props.handleEditClick} value={user.id}>Edit</button>
                                <button onClick={props.handleDeleteClick} value={user.id}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDeleteClick: (e) => {
            dispatch({ type: 'DELETE_USER', delId: e.target.value });
        },
        handleEditClick: (e) => {
            dispatch({ type: 'EDIT_USER', editId: e.target.value });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListing)