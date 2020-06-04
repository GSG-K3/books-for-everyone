import React ,{useEffect , useState} from 'react'

const SearchRusult=(book)=>{
    const [result ,setResult]=useState([])
    const [error , setErr]=useState(null)
    const [loading , setLoading]=useState(true)
    useEffect((book) => {
        console.log('props :',book)
        if(book && loading){
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
            .then(res=> res.json())
            .then(data => setResult(result.concat(data.items)))
            .then(res => console.log(result))
            .then(res => setLoading(false))
            .catch(err => setErr(err.message))}
        }
        )
        return (
            <div>
            {loading && !error ? 
            <h1>Loading ...</h1> :
            result.map((bookRes)=>{
                return   <div key={bookRes.id}>
                    <img src={bookRes.volumeInfo.imageLinks.smallThumbnail} alt='book-poster' />
                    <h3>{bookRes.volumeInfo.title}</h3>
                </div>
            } )
             }
             { error ? <h1>{error}</h1>
             : null}
        </div>
    )
    
}

export default SearchRusult