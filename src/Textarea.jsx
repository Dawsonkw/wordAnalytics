
function Textarea() {
    return (
        <textarea onChange={(e) => {
            console.log('The text area changed!');
            console.log(e.target.value);
        
        }} className='textarea'
        placeholder="Enter Your Text"
        spellCheck="false" 
        />
    );
}

export default Textarea;