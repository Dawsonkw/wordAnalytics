import { useState } from "react";
import Warning from "./Warning";

function Textarea() {

    const [text, setText] = useState('');
    const [warningText, setWarningText] = useState("")

    const handleChange = (e) => {
        let newText = e.target.value;

        // basic validation add in REGEX for more complex validation
        if(newText.includes('<script>')) {
            setWarningText("Script tag is not allowed for security reasons.");
            newText = newText.replace('<script>', '');
        } else if (newText.includes('@')) {
            setWarningText("@ symbol not allowed.");
            newText = newText.replace('@', '');
        } else {
            setWarningText('');
        }

        setText(newText);
    }

    return (
        <div className='textarea'>
            <textarea
            value={text}
            onChange={handleChange}
            
            placeholder="Enter Your Text"
            spellCheck="false"
            />
                <Warning warningText={warningText} />
        </div>
    );
}

export default Textarea;