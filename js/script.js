window.onload = go;

function go() {
    generateNewQuote();
    $("#new-quote").click(function () {
        generateNewQuote();
    });
}

function generateNewQuote() {
    var randomQuote = quotes[Math.floor(Math.random() * (quotes.length))];
    $("#tweet-quote").attr("href", generateTweetUrl('"' + randomQuote.text + '" - ' + randomQuote.source));

    var colorIdx = Math.floor(Math.random() * colors.length);

    $('#text').animate({ opacity: 0 }, 250, function () {
        $(this).animate({ opacity: 1 }, 250);
        $('#text').css("color", colors[colorIdx]);
        $('#text').text(randomQuote.text);
      });
    
      $('#author').animate({ opacity: 0 }, 250, function () {
        $(this).animate({ opacity: 1 }, 250);
        $('#author').css("color", colors[colorIdx]);
        $('#author').html(randomQuote.source);
      });
}

function generateTweetUrl(str) {
    var stringToConvert = str.split(" ").join("%20").split("@").join("%40").split("!").join("%21");
    var resultString = "https://twitter.com/intent/tweet?text=" + stringToConvert;
    return resultString;
}
