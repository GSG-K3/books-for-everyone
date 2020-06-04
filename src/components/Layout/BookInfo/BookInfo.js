import React from 'react'

function BookInfo(props) { 
    const {bookDetails}=props
    return (
        <div>
            <img src={bookDetails.volumeInfo.imageLinks.smallThumbnail} 
                 alt='book-poster' />
            <h1>{bookDetails.volumeInfo.title}</h1>
            <h2>{bookDetails.volumeInfo.authors} </h2>
            <p>{bookDetails.volumeInfo.publisher}+' '+{bookDetails.volumeInfo.publishedDate} </p>
            <p>{bookDetails.volumeInfo.description}</p>
            <a href={bookDetails.volumeInfo.previewLink} >Read this Book</a>

        </div>
    )

}

export default BookInfo
