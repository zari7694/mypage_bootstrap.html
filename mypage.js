function addCard(cardID){
  var parent = "#" + cardID;
  var cardTextID = cardID + "Text";
  //console.log(cardID);
  document.getElementById(cardTextID).style.display = "none";
  var tweetID = cardID + "Tweet";
  var count = $(parent).children().length;
  tweetID += (count - 3);
  //console.log(count);

  var tweet = $('<div class="cardTweet">  <button class="button buttonDelete" onclick=deleteCard()>-</button>  <img class="w3-round" src="https://www.wnmufm.org/sites/wnmu/files/styles/medium/public/201707/twitter_logo.png" alt="Twitter Logo" width=60;height=30;position=relative;left=45;>  <div class="w3-display-right w3-container">Tweet</div>  <div class="w3-display-bottommiddle">Sample tweet goes here!</div> </div>');
  tweet.id = tweetID;

  tweet.appendTo(parent);
  //console.log(tweet.id);
}//^

function deleteCard(tweetID){
  console.log(event.srcElement.offsetParent);
  //document.getElementById(tweetID).remove();
}
