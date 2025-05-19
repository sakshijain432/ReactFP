import React, { useState } from 'react';

function LiveGreet() {
    const [name,setName] = useState(" ");

    const handle = (event) => {
        setName(event.target.value);
    };

    return(
        <div>
            <input type="text" placeholder='write anything' onChange={(handle)}/>
            <p>Hello {name}</p>
        </div>
    );
};

export default LiveGreet;