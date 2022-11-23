import React from 'react'

const QuoteBox = ({ randomQuote, randomColor, getRandomAll }) => {

    console.log(randomColor);

    const colorObj = {
        color: randomColor
    }

    const backgroundObj = {
        backgroundColor: randomColor
    }

    return (
        <article style={colorObj} className='card'>
            <p className='cardQuote'>{randomQuote.quote}</p>
            <h2 className="cardAuthor">{randomQuote.author}</h2>
            <button
                className='cardBtn'
                style={backgroundObj}
                onClick={getRandomAll}>&#62;</button>
        </article>


    )
}

export default QuoteBox