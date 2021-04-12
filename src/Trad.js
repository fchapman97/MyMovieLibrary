import React from 'react';

function Trad(props) {
    let motTraduit;

    switch(props.mot){
        case 'fantastique':
            motTraduit = 'Fantastique';
            break;
        case 'drama':
            motTraduit = 'Dramatique';
            break;
        case 'action':
            motTraduit = 'Action';
        break;
        case 'history':
            motTraduit = 'Histoire';
            break;
        case 'comedy':
            motTraduit = 'Comédie';
            break;
        case 'romance':
            motTraduit = 'Romantique';
            break;   
        case 'sport':
            motTraduit = 'Sport';
            break; 
        case 'war':
            motTraduit = 'Guerre';
            break;                                                    
        default:
            break;
    }
    return (
        <span>
            {motTraduit}
        </span>
    );
}

export default Trad;