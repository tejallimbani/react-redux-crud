import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddUser from '../component/AddUser'
import UserListing from '../component/UserListing'

const Navigation = () => {
    return (
        <Router>
            <div>
                <Route path="add-user" exact component={AddUser}></Route>
                <Route path="user-listing" exact component={UserListing}></Route>
            </div>
        </Router>
    )
}

export default Navigation;