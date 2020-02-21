$(document).ready(function() {

// get a quote from the server when the page loads and add it to the dom
  getQuote();

// when the user enters data and clicks submit, post the quote to the server
  $('#submit').click((e) => {
    e.preventDefault();
    let quote = $('input').val();
    addQuote(quote);
  });

   //YOUR CODE HERE, Add a GET request
  function getQuote(){
    $.ajax({
      type: "GET",
      url: "http://localhost:8080/",
      success: function() {
        console.log("Get Success!")
      },
      error: function() {
        console.log("Get Failed")
      },
      dataType: "string"
    });
  }

  function addQuote(quote){
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:8080/",
      success: function() {
        console.log("Post Success!")
      },
      error: function() {
        console.log("Post Failed")
      },
      dataType: "string"
    });

  }
});
