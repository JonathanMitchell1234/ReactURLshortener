import React from 'react';

const InputShortener = () => {
    return (
        <div className="inputContainer">
        <h1>URL<span>Shortener</span></h1>
        <div>
            <input type="text" placeholder="Enter a URL to shorten it" />
            <button>Shorten</button>
        </div>
        
        </div>

    )
}

export default InputShortener;
        
      