import React ,{useEffect , useState} from 'react'
import BookInfo from '../BookInfo/BookInfo'
import './searchResult.css'

function SearchRusult(props){
    const {book}=props
    const [result ,setResults]=useState([])
    const [error , setError]=useState(null)
    const [loading , setLoading]=useState(false)
    const [showInfo , setShowInfo]=useState(false)
    const [selectedBook , setSelectedBook]=useState(null)
    useEffect(() => {
        if (!book) {
            return;
          }
        else  setLoading(true);
          // make API calls
          fetch("https://www.googleapis.com/books/v1/volumes?q=" + book)
          .then(response => {
            return response.json();
          })
          .then(data => {
            setLoading(false);
            setResults(data.items);
          })
          .catch(err => {
            setLoading(false);
            setError(true);
            console.error(err);
          });
        }, [book]);
        
        function handleClick(selectedBookInfo){
            setSelectedBook(selectedBookInfo)
            setShowInfo(true)
            console.log('ggggggg',selectedBookInfo)
            return ;
        }
        return (
            <div className='search_result_component_div' >
            {loading && !error && !showInfo ? 
            <h1 className='search_result_loading' >Loading ...</h1> 
            : result.length >0 ?
            <div className='result_div' >
            {result.map((bookRes)=>{
                return <div key={bookRes.id} 
                            className='result_book_div' 
                            onClick={()=> handleClick(bookRes)} >
                    <img src={bookRes.volumeInfo.imageLinks.smallThumbnail} 
                         alt='book-poster' />
                    <h3>{bookRes.volumeInfo.title}</h3>
                </div>

            } )}
            </div>
            : showInfo ?
            <BookInfo  bookDetails={selectedBook} /> : null
             }
             { error ? <h1>{error}</h1>
             : null}
        </div>
    )
}

export default SearchRusult