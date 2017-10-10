document.addEventListener('DOMContentLoaded', function() {
  $('#clear-photos').off().on('click',function(){
    chrome.tabs.query({}, function(tabs) {
        var message = {togglePhotos: true};
        for (var i=0; i<tabs.length; ++i) {
            chrome.tabs.sendMessage(tabs[i].id, message);
        }
    });
  });

    $('#clear-names').off().on('click',function(){
        chrome.tabs.query({}, function(tabs) {
            var message = {toggleNames: true};
            for (var i=0; i<tabs.length; ++i) {
                chrome.tabs.sendMessage(tabs[i].id, message);
            }
        });
    });
});

