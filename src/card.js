import React from 'react';
import 'tachyons';
import './card.css'


function Card({id, name, email}){
    return (
        <div className='bg-light-green dib pa3 ma2  tc grow shadow-5 bw2'>
            <img src={`https://robohash.org/${id}?100x100`} alt=''></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;