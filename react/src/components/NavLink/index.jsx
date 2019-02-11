import React from 'react';
import './index.css';

export default (props) => {
    const name = [props.navName.charAt(0).toUpperCase(), props.navName.slice(1)].join('');
    return (
        <div className={'navLink-container'}>
            <div className={'nav-link'}>{name}</div>
        </div>
    );
}