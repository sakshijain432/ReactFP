import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

function Likes() {
    const [like,setLike] = useState(false);

    return (
        <button onClick={() => setLike(!like)}>{like ? <FaHeart style = {{color : 'gray'}} /> : <FaHeart style = {{color : 'red'}} /> }</button>

    );


};

export default Likes;
