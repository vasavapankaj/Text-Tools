import React from 'react'
import { useState } from 'react'


export default function TextForm(props) {
    
    const handleUpclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLoclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleClearclick = ()=>{
        let newText = ("");
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }
    const handleCopyclick = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!","success");
    }

    const handleExtraSpaces = () => {
        // split on ANY whitespace, remove empty items, then join with single space
        let newText = text.split(/\s+/).filter((e) => e.length !== 0).join(" ");
        setText(newText);
        props.showAlert("Extra spaces removed!", "success");
    };
    
    const handleonchange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    const wordCount =text.trim().length === 0? 0 : text.trim().split(/\s+/).filter((e) => e.length !== 0).length;
    const charCountWithoutSpaces = text.replace(/\s/g, "").length;
    
    return (
        <>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'#1a1a1a':'white',
             color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
        </div>
        <button  className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpclick}>Convert to Uppercase</button>
        <button  className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLoclick}>Convert to Lowercase</button>
        <button  className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button  className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClearclick}>Clear Text</button>
        <button  className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopyclick}>Copy Text</button>
    </div>
    <div className="container my-3" style={{Color: props.mode==='dark'?'white':'black' }}>
        <h2>Your Text Summary</h2>
        <p>Words: {wordCount}</p>
        <p>Characters : {charCountWithoutSpaces}</p>
        <p>Reading Time: {0.008 * wordCount} minutes</p>
    </div>
    </>
  )
}