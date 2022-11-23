import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import quotes from './json/quotes.json'
import QuoteBox from './Componentes/QuoteBox'
import color from './utils/color'

const Principal = () => {

    const getIndexRandom = arr => Math.floor(Math.random() * arr.length)
    const firstQuote = quotes[getIndexRandom(quotes)]
    const firstColor = color[getIndexRandom(color)]
    const [randomQuote, setRandomQuote] = useState(firstQuote)
    const [randomColor, setRandomColor] = useState(firstColor)

    const getRandomAll = () => {
        setRandomQuote(quotes[getIndexRandom(quotes)])
        setRandomColor(color[getIndexRandom(color)])
    }

    return (
        <div style={{ backgroundColor: randomColor }} className="Principal">
            <QuoteBox
                randomQuote={randomQuote}
                randomColor={randomColor}
                getRandomAll={getRandomAll}

            />

        </div>
    )
}

export default Principal