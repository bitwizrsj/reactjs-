import React, { useState } from 'react'

function ButtonTrigger() {
    const [isClicked, setIsClicked] = useState(true);

    return(
        <button onClick={() => setIsClicked(!isClicked)}>{isClicked ? 'Click me' : 'Clicked'}</button>
    )
}

export default ButtonTrigger;