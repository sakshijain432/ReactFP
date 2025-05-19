import React,{useState} from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function showPass() {
    const [show,alterShow] = useState(false);

    const pass = () => {
        alterShow(!show);
    }
    return(
        <div>
            <input type={show ?"text" : "password"} placeholder='enter password' />
            <button onClick={(pass)}>{show ? < FaEyeSlash/> : <FaEye/>}</button>
        </div>
    );
};

export default showPass;
 