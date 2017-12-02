// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//An array of objects containing the five quotes.
var quotes = [
  {
    quote: 'Yeah, you got some silverware, but really are you eating though?',
    source: 'Donald Glover',
    citation: 'Sweatpants',
    year: '2013'
    
  },
  {
    quote: 'Hate on success and success will hate on you.',
    source: 'Hector "OpTic H3CZ" Rodriguez',
    citation:'Youtube',
    year:'2016'
  
  },
  {
    quote: "I plan to eat with the people I starved with.",
    source: 'Logic',
    citation: 'The High Life',
    year: '2013'
  },
  {
    quote: 'The only real cheerio is honey nut.',
    source: 'Larry King',
    citation:'Fox Sports',
    year: '2016'
  
 
  },
  {
    quote: "Power comes in response to a need, not a desire.",
    source: 'Goku',
    citation: 'Dragon Ball Z',
    year: '1989'

  },
  {
    quote: "Curious that we spend more time congratulating people who have succeeded than encouraging people who have not.",
    source: 'Neil deGrasse Tyson',
    citation: 'Twitter',
    year: '2012'

  }
];

//Function to get random value.
function getRandomQuote() {

//Random Math function
    var theQuote = Math.floor(Math.random() * (quotes.length));
   
//Returns value given from above
    return quotes[theQuote];
}

//Function to print quote.
function printQuote() {
   
// Create variable message.
    var message;
    
// Calling the getRandomQuote function and storing it in a variable.
    var finalQuotePrint = getRandomQuote(quotes);

  message = '<p class="quote">' + finalQuotePrint.quote + '</p>'; 
  message += '<p class="source">' + finalQuotePrint.source;
  message += '<span class="citation">' + finalQuotePrint.citation + '</span>';
  message += '<span class="year">' + finalQuotePrint.year + '</span>'
  message += '</p>';

  document.getElementById('quote-box').innerHTML = message;

}
    
