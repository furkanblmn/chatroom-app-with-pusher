import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext';

export default function Profile() {
    const { userInformation } = useContext(UserContext)
    return (
        <div className="profile-area my-profile">
            <div className="user">
                <div className="img-area">
                    <img className="profile-photo" src={userInformation.profile_photos} alt="" />
                </div>
                <div className="user-info">
                    <span className="user-name">{userInformation.name}</span>
                </div>
            </div>
        </div>
    )
}
