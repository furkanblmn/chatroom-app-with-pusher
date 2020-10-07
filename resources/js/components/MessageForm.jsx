import React, { useState } from 'react'
import Axios from 'axios';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

export default function MessageForm() {
    const [emojiBoard, setEmojiBoard] = useState(false)
    const [classD, setClassD] = useState({
        bottom: '-350px',
        transition: 'all .5s ease',
        visibility: 'visible'
    })
    const [reqData, setReqData] = useState({
        message: ""
    })
    function addMessage(e) {
        e.preventDefault()
        Axios.post('/api/auth/messages', reqData).then(response => {
            console.log(response.data);
            setReqData({
                message: ""
            });
        });
    }
    function handleOnChange(e) {
        setReqData({
            [event.target.name]: event.target.value
        })
    }
    function openEmojiBoard() {
        if (!emojiBoard) {
            setClassD({
                bottom: '70px',
                transition: 'all .5s ease',
                visibility: 'visible'
            })
        } else {
            setClassD({
                bottom: '-350px',
                transition: 'all .5s ease',
                visibility: 'hidden'
            })
        }
        setEmojiBoard(!emojiBoard)
    }
    function deneme(e) {
        setReqData({
            message: reqData.message + e.native
        })
    }
    return (
        <div>
            <Picker
                showPreview={false}
                showSkinTones={false}
                color="#1c9dea"
                style={classD}
                native={true}
                onSelect={deneme}
                i18n={{
                    search: 'Emoji Arayın',
                    notfound: ' ',
                    categories: {
                        search: ' ',
                        recent: 'Son Kullanılanlar',
                        people: 'Yüz İfadeleri ve İnsanlar',
                        nature: 'Hayvanar ve Doğa',
                        foods: 'Yiyecek ve İçecek',
                        activity: 'Aktivite',
                        places: 'Seyehat ve Yerler',
                        objects: 'Nesbeler',
                        symbols: 'Simgeler',
                        flags: 'Bayraklar'
                    }
                }}
                notFoundEmoji=""
                notfound="" />
            <div className="input-area">
                <form onSubmit={addMessage} autoComplete="off">
                    <div className="row">
                        <div className="col-lg-1">
                            <span className={`emoji-keyboard ${emojiBoard}`}><a onClick={openEmojiBoard}><i className="far fa-laugh"></i></a></span>
                        </div>
                        <div className="col-lg-11">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    aria-describedby="emailHelp"
                                    placeholder="Mesajınızı yazın..."
                                    onChange={handleOnChange}
                                    value={reqData.message}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
