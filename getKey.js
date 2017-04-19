// If riot games API url, try to redirect
chrome.storage.sync.get({
  value: "NoKey",
}, function(key) {
  chrome.runtime.sendMessage({key: key.value});
});
console.log('here');
