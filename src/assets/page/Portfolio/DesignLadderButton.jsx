/* eslint-disable react/prop-types */
// import React from 'react'

export default function DesignLadderButton({text, onClick, className}) {
    return (
        <button style={ {
            boxShadow: '5px 5px #172739'
        } }
            onClick={ onClick }
            className={ `bg-white border-[#172739] border-[1.5px]  px-4 py-[5px]  ${className}` }>
            { text }
        </button>
    );
}
