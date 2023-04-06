import React, { useState } from "react";
import './NewChat.css';

import  avatar from './../image/avatar.png'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({user, chatlist, show, setShow}) => {
    const [list, setList] = useState([
        {id: 123, avatar: {avatar}, name: 'Adicionar'},
    ])

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className="newChat" style={{left: show?0:-530}}>
            <div className="newChat--head">
                <div onClick={handleClose} className="newChat--backbutton">
                    <ArrowBackIcon style={{color: '#FFF'}} />
                </div>
                <div className="newChat--headtitle">Nova conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item, key)=>(
                    <div className="newChat--item" key={key}>
                        <img className="newChat--itemavatar" src={avatar} alt="" />
                        <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))} 
            </div>
        </div>
    );
}