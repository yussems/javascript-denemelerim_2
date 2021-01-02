const quotes = [
    {
        name:'Stephen King',
        quote:"Get busy living or get bust dying."
    },
    {
        name:"John F.Kennedy",
        quote:"Those Who dare to fail miserably can achive greatly"

    },
    {
        name: "Leonardo Da Vinci",
        quote:"It had long since come to my attention that people of accomplisment rarely sar back let thing happen to them. They went out and happend to things. "
    },
    {
        name: "Abraham Lincoln",
        quote: "I'm a success today because I had a friend who believed in me and I didn't hae the heart to let him down"
    },
    {
        name:"Leo Tolstoy",
        quote:"If you want to happy,be. "
    }
] 

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click',displayQuote);

function displayQuote() {
    let number = Math.floor(Math.random()*quotes.length) ;
    quoteAuthor.innerHTML=quotes[number].name;
    quote.innerHTML=quotes[number].quote;
}
