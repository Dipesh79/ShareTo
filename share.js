chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
  let url = tabs[0].url;
  let facebookLink = "https://www.facebook.com/sharer/sharer.php?u="+url;
  let twitterLink = "https://twitter.com/intent/tweet?url="+url;
  let pinterestLink = "https://www.pinterest.com/pin/create/button/?url="+url;
  let linkedinLink = "https://www.linkedin.com/sharing/share-offsite?mini=true&url="+url;
  let whatsappLink = "https://api.whatsapp.com/send?text="+url;
  let redditLink = "https://www.reddit.com/submit?url="+url;
  let telegramLink = "https://t.me/share/url?url="+url;
  let tumblrLink = "https://tumblr.com/widgets/share/tool?canonicalUrl="+url;
  let viberLink = "viber://forward?text="+url;
  let gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=&body="+url+"&ui=2&tf=1&pli=1";
  let trelloLink = "https://trello.com/add-card?mode=popup&url="+url+"&desc=";
  let messengerLink = "https://www.facebook.com/dialog/send?link="+url;
  let skypeLink = "https://web.skype.com/share?url="+url;
  document.getElementById("facebook").setAttribute("href",facebookLink);
  document.getElementById("twitter").setAttribute("href",twitterLink);
  document.getElementById("pinterest").setAttribute("href",pinterestLink);
  document.getElementById("linkedin").setAttribute("href",linkedinLink);
  document.getElementById("whatsapp").setAttribute("href",whatsappLink);
  document.getElementById("reddit").setAttribute("href",redditLink);
  document.getElementById("telegram").setAttribute("href",telegramLink);
  document.getElementById("tumblr").setAttribute("href",tumblrLink);
  document.getElementById("viber").setAttribute("href",viberLink);
  document.getElementById("gmail").setAttribute("href",gmailLink);
  document.getElementById("trello").setAttribute("href",trelloLink);
  document.getElementById("messenger").setAttribute("href",messengerLink);
  document.getElementById("skype").setAttribute("href",skypeLink);
});



