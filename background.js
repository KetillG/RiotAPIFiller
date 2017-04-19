//Redirect on call
chrome.runtime.onMessage.addListener(function(request, sender) {
  var riotURL;
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    riotURL = tabs[0].url;
    //If not empty key then return;
    //if(riotURL.slice(-8) !== "api_key=") return;
    chrome.tabs.update(sender.tab.id, {url: riotURL + request.key});//request.redirect
  });
});
