import React from 'react'

const letterPlace = ({ letters }) => {

    return (
        <ul className='px-0 my-8'>
            {letters.map(letter => <LetterItem letter={letter} key={letter.id} />)}
        </ul>
    )
}

export default letterPlace