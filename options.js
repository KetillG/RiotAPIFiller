document.getElementById('save').addEventListener('click', saveKey);
function saveKey() {
    var APIKey = document.getElementById("key").value;
    console.log(APIKey);
    chrome.storage.sync.set({
    value: APIKey
  }, function() {
    // Update status key to let user know options were saved.
    restoreOptions();
  });
}
function restoreOptions() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    value: "NoKey",
  }, function(key) {
    document.getElementById('currentKey').innerHTML = key.value;
  });
}
restoreOptions();
