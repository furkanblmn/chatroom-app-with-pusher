import React, { useState, useContext } from 'react';
import Axios from 'axios';
import { UserContext } from '../contexts/UserContext';

export default function Example() {
    const { userInformation, createUserInf, deleteUserInf } = useContext(UserContext)
    const [girisBilgi, setGirisBilgi] = useState({ email: "", password: "" })
    function girisYap(e) {
        e.preventDefault()
        Axios.post('/api/login', girisBilgi).then(res => {
            if (res.data) {
                createUserInf(res.data)
            }
        })
    }
    function handleClick() {
        Axios.delete('/api/auth/cikis').then(
            deleteUserInf()
        )
    }
    function handleFieldChange(event) {
        setGirisBilgi({
            ...girisBilgi,
            [event.target.name]: event.target.value
        })
    }
    return (
        <div className="container login-area">
            <div className="vertical-center">
                <form className="default-form signin-form">
                    <h3 className="header">Login</h3>
                    <div className="form-group">
                        <input
                            id="email"
                            name="email"
                            className="form-control"
                            type="email"
                            value={girisBilgi.email}
                            placeholder="Kullanıcı Adı veya E-posta Adresi"
                            onChange={handleFieldChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            id="password"
                            name="password"
                            className="form-control"
                            type="password"
                            value={girisBilgi.password}
                            placeholder="Şifre"
                            onChange={handleFieldChange}
                        />
                    </div>
                    <div className="form-btn-group">
                        <button type="submit" className="btn btn-primary" onClick={girisYap}> Giriş Yap</button>
                    </div>
                </form>
            </div>
        </div >

    );
}


