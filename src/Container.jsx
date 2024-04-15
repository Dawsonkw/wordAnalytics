import Textarea from "./Textarea";
import Stats from "./Stats";
import { useState } from "react";
import { INSTAGRAM_MAX_CHARACTERS, X_MAX_CHARACTERS } from "./constants";

function Container() {
    const [text, setText] = useState('');
    const stats = {
        numberOfWords: text.split(/\s/).filter((word) => word !== '').length,
        numberOfCharacters: text.length,
        numberOfSentences: text.split(/[.!?]/).length - 1,
        instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS- text.length,
        xCharactersLeft: X_MAX_CHARACTERS - text.length,
        numberOfPages: Math.ceil(text.length / 1500),
    }
    

    return (
        <main className="container">
            <Textarea text={text} setText={setText}/>
            <Stats 
                stats={stats}
            />
        </main>
    );
}

export default Container;