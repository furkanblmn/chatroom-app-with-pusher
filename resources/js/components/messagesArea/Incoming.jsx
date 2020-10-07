import React, { useState, useEffect } from 'react'
import Moment from 'react-moment';
import 'moment/locale/tr';

export default function incoming(props) {
    const [visibility, setVisibility] = useState({
        display: 'block'
    })
    const [className, setClassName] = useState("incoming-message")
    useEffect(() => {
        if (props.prev) {
            if (props.message.user_id === props.prev.user_id) {
                setVisibility({display: 'none'})
                setClassName("incoming-message thread")
            } else {
                setVisibility({display: 'block'})
                setClassName("incoming-message")
            }
        }
    }, [props])
    return (
        <div className={className}>
            <div className="image-area">
                <img style={visibility} src={props.message.user.profile_photos} />
            </div>
            <div className="right">
                <div className="top" style={visibility}>
                    <span className="user-name" style={{ color: props.message.user.color }}>{props.message.user.name}</span>
                </div>
                <div className="bottom">
                    <span className="message">{props.message.message}</span>
                    <Moment format="HH.mm" className="send-time">{props.message.created_at}</Moment>
                </div>
            </div>
        </div>
    )
}
