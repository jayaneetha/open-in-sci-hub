let savebutton = document.getElementById('save');
let scihub_domain = document.getElementById('scihub_domain');

function setup(){
    savebutton.addEventListener('click', function() {
        chrome.storage.sync.set({domain: scihub_domain.value}, function() {
          console.log('saved domain : ' + scihub_domain.value);
        })
    });

    chrome.storage.sync.get('domain', function(data) {
       sh_domain = "https://sci-hub.tw/";

       if(data != undefined &&  data.domain !=undefined){
          sh_domain = data.domain;
        }
        
        scihub_domain.value = sh_domain;
      });
    
}

setup();