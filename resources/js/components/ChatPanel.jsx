import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import MessageArea from './messagesArea/Index.jsx';
import UserList from './userComponents/UserList';

export default function ChatPanel() {
    const [messages, setMessages] = useState([])
    const [messagesNow, setMessagesNow] = useState({
        messagesNowArr: []
    })
    useEffect(() => {
        Axios.get('/api/auth/messages').then(response => {
            setMessages(response.data)
        });
    }, [])
    useEffect(() => {
        var actualMessage = []
        Pusher.logToConsole = false;
        var pusher = new Pusher('APP_KEY', {
            cluster: 'eu',
            encrypted: false
        });
        var channel = pusher.subscribe('chat');
        channel.bind('chat-event', function (data) {
            actualMessage.push(data.message[0])
            setMessagesNow({
                messagesNowArr: actualMessage
            })
        });
    }, [])
    return (
        <div className="contain">
            <div className="row message-area">
                <div className="col-lg-3 nopadding">
                    <UserList />
                </div>
                <div className="col-lg-9 nopadding">
                    <MessageArea messages={messages} actualMessage={messagesNow.messagesNowArr} />
                </div>
            </div>
        </div>
    )
}
