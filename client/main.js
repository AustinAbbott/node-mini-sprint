$(document).ready(function() {

// get a quote from the server when the page loads and add it to the dom
  getQuote();

// when the user enters data and clicks submit, post the quote to the server
  $('#submit').click((e) => {
    e.preventDefault();
    let quote = $('input').val();
    addQuote(quote);
    // $('.quote').text(e.target.value)
  });

   //YOUR CODE HERE, Add a GET request
  function getQuote(){
    $.ajax({
      type: "GET",
      url: "http://localhost:8080/",
      success: function(quotes) {
        $('.quote').text(quotes)
        console.log("Get Success!")
      },
      error: function() {
        console.log("Get Failed")
      },
    });
  }

  function addQuote(quote){
    $.ajax({
      type: "POST",
      url: "http://localhost:8080/quote",
      data: JSON.stringify(quote),
      contentType: 'application/json',
      success: function(quote) {
        console.log(quote)
        console.log("Post Success!")
      },
      error: function() {
        console.log("Post Failed")
      },
    });

  }
});
