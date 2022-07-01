document.addEventListener('DOMContentLoaded', () => {
    const infoDisplay = document.getElementById('info');

    window.addEventListener('DOMContentLoaded', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {}, function(result) {
                infoDisplay.innerHTML = result
            });
        });
    });

});