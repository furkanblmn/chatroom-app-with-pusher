import React, { useContext } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import { UserContext } from '../../contexts/UserContext';
import MessageForm from '../MessageForm';
import Incoming from './Incoming'
import MyMessage from './MyMessage';

export default function MessageArea(props) {
    const { userInformation } = useContext(UserContext)
    return (
        <div className="main-div">
            <ScrollToBottom className="messages-area" scrollViewClassName="scroll-bar" followButtonClassName="to-bottom">
                <div className="all-items list">
                    {
                        props.messages.map(function (item, index, elements) {
                            if (index != 0) {
                                var prev = elements[index - 1];
                            }
                            return (
                                item.user_id !== userInformation.id ?
                                    <Incoming key={item.id} message={item} prev={prev || null} /> :
                                    <MyMessage key={item.id} message={item} prev={prev || null} />
                            )
                        })
                    }
                    {
                        props.actualMessage.map(function (item, index, elements) {
                            if (index != 0) {
                                var prev = elements[index - 1];
                            }
                            return (
                                item.user_id !== userInformation.id ?
                                    <Incoming key={item.id} message={item} prev={prev || null} /> :
                                    <MyMessage key={item.id} message={item} prev={prev || null} />
                            )
                        })
                    }
                </div>
            </ScrollToBottom>
            <MessageForm />
        </div>
    )
}
