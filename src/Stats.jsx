
function Stats({stats}) {
    return (
        <section className='stats'>
            <Stat number={stats.numberOfCharacters} label='Characters'/>
            <Stat number={stats.numberOfWords} label='Words'/>
            <Stat number={stats.numberOfSentences} label='Sentences' />
            <Stat number={stats.numberOfPages} label='Pages'/>
            <Stat number={stats.instagramCharactersLeft} label='Instagram'/>
            <Stat number={stats.xCharactersLeft} label='X'/>
        </section>
    );
}

function Stat({ number, label }) {
    return (
        <section className="stat">
            <span className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}>{number}</span>
            <h2 className="second-heading">{label}</h2>
        </section>
    );
}

export default Stats;