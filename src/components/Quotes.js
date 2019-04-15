import React from "react"

const quotes = [
    {
        quote:"I believe the children are the future... Unless we stop them now!",
        character:"Homer Simpson",
        image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"  
    },
    {
        quote:"Me fail English? That's unpossible",
        character:"Ralph Wiggum",
        image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
    },
    {
        quote:"Shoplifting is a victimless crime, like punching someone in the dark.",
        character:"Nelson Muntz",
        image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
    },
    {
        quote: "Hello, Simpson. I'm riding the bus today because Mother hid my car keys to punish me for talking to a woman on the phone. She was right to do it.",
        character:"Principal Skinner",
        image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460"
    },
    {
        quote:"Nothing you say can upset us. We're the MTV generation.",
        character: "Bart Simpson",
        image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638"
    },
    {
        quote:"Facts are meaningless. You could use facts to prove anything that's even remotely true.",
        character:"Homer Simpson",
        image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
    }
    
];

const Quotes = () => {
    return (
        <div>
            {quotes.map(quote =>
                <figure>
                <img
                src={quote.image}
                alt={quote.character}
                />
                <figcaption>
                <blockquote>
                    {quote.quote}
                </blockquote>
                <cite>{quote.character}</cite>
                </figcaption>
            </figure>
            )}
        </div>
    )
}


export default Quotes