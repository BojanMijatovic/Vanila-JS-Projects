
const quoteContainer = document.getElementById('quote-app');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuote = document.getElementById('new-quote');




//  get quote
async function getQuote() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    if (data.quoteAuthor === '') {      // if author is blank of unknown
      author.innerText = 'unknown';
    } else {
      author.innerText = data.quoteAuthor;
    }
    // reduce size of quotes
    if (data.quoteText.length > 50) {
      quote.classList.add('long-quote');
    } else {
      quote.classList.remove('long-quote');
    }

    quote.innerText = data.quoteText;
  }
  catch (error) {
    getQuote();
    console.log(`error is ${error}`);
  }
}


//  on load 

getQuote();
