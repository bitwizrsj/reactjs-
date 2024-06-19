import React, {useState} from 'react';

function Toggle () {
    const [isVisible, setIsVisible] = useState(true);

    return(
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? 'Hide' : "Show"} Text </button>
            {isVisible && <p>This text is toggled on and off.</p>}
        </div>
    )
}

export default Toggle;