import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export default function User(props) {
    return (
        <div className="profile-area offline">
            <div className="user">
                <div className="img-area">
                    <img className="profile-photo" src={props.user.profile_photos} alt="" />
                </div>
                <div className="user-info">
                    <span className="user-name">{props.user.name}</span>
                </div>
            </div>
        </div>
    )
}
