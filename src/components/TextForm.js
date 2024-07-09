import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleCopy = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value)
    }

    const handleOnChange = (event) => {
        // console.log("on change ");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark'? 'white' : '#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mh-3" >
                    <textarea className="form-control my-2" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'gray' : 'white' , color: props.mode === 'dark'? 'white' : '#042743' }} rows="8" id="myBox"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            </div>

            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}} >
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length >0 ?text:"Enter somthing in the text box to preview"}</p>
            </div>
        </>

    )
}
