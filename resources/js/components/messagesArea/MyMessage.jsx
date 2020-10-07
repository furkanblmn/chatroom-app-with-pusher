import React, { useState, useEffect } from 'react'
import Moment from 'react-moment';
import 'moment/locale/tr';

export default function MyMessages(props) {
    const [className, setClassName] = useState("my-message")
    useEffect(() => {
        if (props.prev) {
            if (props.message.user_id === props.prev.user_id) {
                setClassName("my-message thread")
            } else {
                setClassName("my-message")
            }
        }
    }, [props])
    return (
        <div key={props.message.id} className={className}>
            <div className="right">
                <div className="bottom">
                    <span className="message">{props.message.message}</span>
                    <Moment format="HH:mm" className="send-time">{props.message.created_at}</Moment>
                </div>
            </div>
        </div>
    )
}
