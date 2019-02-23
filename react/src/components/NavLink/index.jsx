import React from 'react';
import './index.css';

const handleClickForContact = (e) => {
    e.preventDefault();
    location.href = 'mailto:celticjmp@gmail.com';
};

export default (props) => {
    const name = [props.navName.charAt(0).toUpperCase(), props.navName.slice(1)].join('');
    return (
        <div className={'navLink-container'}>
            <div 
                className={'nav-link'} 
                onClick={props.navName === 'contact me' ? (e) => handleClickForContact(e) : ''}>
                    {name}
            </div>
        </div>
    );
}