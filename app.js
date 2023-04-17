const quoteText = document.getElementById("quote");
const quoteBtn = document.getElementById("quoteBtn");
const authorText = document.getElementById("author");

quoteBtn.addEventListener("click", generateQuotes);

generateQuotes();

async function generateQuotes() {
    const resp = await fetch("https://zenquotes.io/api/random");
    const data = await resp.json();
    console.log(data);
    
    let quote = "";
    let author = "";
       
    if (data[0].q == undefined) {
        quote = "Error: no quote here";
       } else {
        quote = data[0].q;
       }

    quoteText.innerHTML = ` "${quote}" `;

       if (data[0].a == undefined) {
        author = "Author Unknown";
       } else {
        author = data[0].a;
       }

    authorText.innerHTML = ` - ${author}`;

}