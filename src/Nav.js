import React from 'react';

export default function Nav ({
    currentPage, PageChange
}) {
    return (
        <ul className='nav nav-tab'>
            <li className='nav-item'>
                <a href='#home' onClick={() => PageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
            </li>
            <li className='nav-item'>
                <a href='#about' onClick={() => ('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About </a>
            </li>
            <li className='nav-item'>
                <a href='#projects' onClick={() => ('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects </a>
            </li>
            <li className='nav-item'>
                <a href='#resume' onClick={ () => PageChange ('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link' }>Resume</a>
            </li>
            <li className='nav-item'>
                <a href='#contact' onClick={ () => PageChange ('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link' }>Contact</a>
            </li>
        </ul>
    );
}