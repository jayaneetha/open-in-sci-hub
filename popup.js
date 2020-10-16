let openBtn = document.getElementById('open');

function openSciHub () {

    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url;
        chrome.storage.sync.get('domain', function(data) {
            
            sh_domain = "https://sci-hub.tw/";
     
             if(data != undefined &&  data.domain !=undefined){
                 sh_domain = data.domain;
             }
             
             chrome.tabs.create({ url: sh_domain + url });

           });

    });
};


openBtn.onclick = function () {
    openSciHub();
};

openSciHub();
