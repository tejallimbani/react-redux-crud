import React from 'react'
import { connect } from 'react-redux'

const AddUser = (props) => {
    return (
        <div>
            <form method="post" onSubmit={props.handleAddUserSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="submit" name="add" value="Add" />
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddUserSubmit: (e) => {
            e.preventDefault();
            dispatch({ type: 'ADD_USER', name: e.target.name.value, email: e.target.email.value });
        }
    }
}

export default connect(null, mapDispatchToProps)(AddUser)