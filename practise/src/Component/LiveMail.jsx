import React,{useState} from 'react';

function LiveMail() {
    const [mail,setMail] = useState(" ");

    const call = (event) => {
        setMail(event.target.value);
    };

    return(
        <div>
            <input type="text" placeholder='enter your email'  onChange={(call)}/>
            <p>We'll contact you at : {mail}</p>
        </div>
    );
};

export default LiveMail;

