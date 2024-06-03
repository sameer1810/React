import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) 
        return <div>please login</div>
    else
        return <div>Welcome {user.username}</div>
}

export default Profile

//useContext(UserContext) provides access to the user data from the context.
//If user is not set, it prompts the user to log in. Otherwise, it displays a welcome message with the username.