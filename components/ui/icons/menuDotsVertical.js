import React from 'react';

export default function MenuDotsVertical(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className={props.customClass} fill="currentColor">
            <circle cx="12" cy="2" r="2"/>
            <circle cx="12" cy="12" r="2"/>
            <circle cx="12" cy="22" r="2"/>
        </svg>
    );
}