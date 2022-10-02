const quoteText = document.getElementById("quote");
const quoteBtn = document.getElementById("quoteBtn");
const authorText = document.getElementById("author");

quoteBtn.addEventListener("click", generateQuotes)

generateQuotes()

async function generateQuotes() {
    const res = await fetch("https://zenquotes.io/api/random"
    )
    const data = await res.json();
    console.log(data);
    
    let quote = ""
       if (data[0].q == undefined) {
        quote = "Error: no quote here"
       } else {
        quote = data[0].q
       }
    quoteText.innerHTML = ` "${quote}" `

    let author = ""
       if (data[0].a == undefined) {
        author = "Author unknown"
       } else {
        author = data[0].a
       }
    authorText.innerHTML = ` - ${author}`


}