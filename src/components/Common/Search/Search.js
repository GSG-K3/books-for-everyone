import React ,{useState} from 'react'
import SearchIcon from '../../../Images/Searching-512.png'
import './search.css'

function SearchForBook() {
    const [bookTitle, setBookTitle]=useState()
    const [showResult , setShowResult]=useState(false)
    function handleChange(e){
        setBookTitle(e.target.value)
    }
    function togelShowResult(){
        setShowResult(true)
        const input =document.getElementById('searchInput')
            input.value=null
            console.log(showResult ,bookTitle)
        
    }
    return (
        <div>
            <div className='search_component_div' >
                <input type='text' 
                    className='search_div_input' 
                    onChange={handleChange}
                    id='searchInput' />
                <button type='submit' 
                        className='search_button'
                        onClick={togelShowResult} >
                        <img className='search_button_img' 
                            src={SearchIcon} 
                            alt='search-icon'/>
                        </button>
            </div>

        </div>
    );
}

export default SearchForBook