import React from 'react';

const SearchBox = ({searchChnage}) => {
    return (
        <div >
            <input  className='pa3 ba b--green bg-light-green'
            type="search" 
            placeholder="Search Robo Friends"
            onChange={searchChnage}></input>
        </div>
    );
}

export default SearchBox;