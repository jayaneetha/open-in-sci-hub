let openBtn = document.getElementById('open');

openBtn.onclick = function (element) {

    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url;
        chrome.tabs.create({ url: 'https://sci-hub.tw/' + url });
    });
};