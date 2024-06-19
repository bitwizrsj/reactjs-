import React, {useState} from 'react';

function BgChange () {
    const [color, setColor] = useState('white');

    return(
        <div style={{backgroundColor: color}}>
           <div>
            <p>Try to change the background color by following buttons:</p>
            <button onClick={() => setColor('red')}>Red</button>
            <button onClick={() => setColor('pink')}>Pink</button>
            <button onClick={() => setColor('blue')}>Blue</button>
            <button onClick={() => setColor('purple')}>Purple</button>
            <button onClick={() => setColor('yellow')}>Yellow</button>
            <button onClick={() => setColor('white')}>Reset</button>
            </div> 
        </div>
        
    )
}

export default BgChange;