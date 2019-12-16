import React from 'react'
import { connect } from 'react-redux'

const EditUser = (props) => {
    console.log(props.editUser.id);
    return (
        <div>
            <form method="post" onSubmit={props.handleUpdateUserSubmit}>
                <input type="hidden" name="editid" value={props.editUser.id} />
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" defaultValue={props.editUser.name} />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" defaultValue={props.editUser.email} />
                </div>
                <div className="form-group">
                    <input type="submit" name="edit" value="Edit" />
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        editUser: state.editUser[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleUpdateUserSubmit: (e) => {
            e.preventDefault();
            console.log(e.target.editid.value);
            dispatch({ 
                type: 'UPDATE_USER', 
                editid: e.target.editid.value,
                name: e.target.name.value, 
                email: e.target.email.value 
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)