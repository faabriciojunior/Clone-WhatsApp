import React from 'react';
import './ChatListItem.css'

import Avatardois from "./../image/Avatardois.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({onClick, active, data}) => {
    return (
        <div 
        className={`chatlistitem ${active?'active':''}`}
        onClick={onClick}
        >
            <img className='chatlistitem--avatar' src={Avatardois} alt='' />
            <div className='chatlistitem--lines'>
                <div className='chatlistitem--line'>
                    <div className='chatlistitem--name'>{data.title}</div>
                    <div className='chatlistitem--date'>19:00</div>
                </div>
                <div className='chatlistitem--line'>
                    <div className='chatlistitem-lastMsg'>
                        <p>Opa, tudo bem?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}