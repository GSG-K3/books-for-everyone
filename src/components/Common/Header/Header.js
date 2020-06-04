import React from 'react'
import BooksImg from '../../../Images/books-cartoon1.png'
import './header.css'

function Header(){
return (
    <div className='header_component_main_div'>
        <div className='header_title_div'>
            <h1>BOOKS</h1>
            <p>For Everyone</p>
        </div>
        <div className='header_img_div'>
            <img src={BooksImg} alt='books' />
        </div>
    </div>
);
}

export default Header
