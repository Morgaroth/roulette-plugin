// 'use strict';

// var host = chrome.extension.getURL('html/index.html')



// var setted = 0

// var filters = {
//     urls: ["*"]
// }

// function setOrDisableSpy(details){
//     console.log("setted="+setted)
//     if(setted==1){
//         setted=0
//     }else{
//         setted=1
//     }
// }



// chrome.webRequest.onBeforeRequest.addListener(
//     function(details) {
//          return {redirectUrl: host};
//     },
//     {
//         urls: [
//             "*://*.pizzahut.co.uk/*",
//             "*://*.dominos.co.uk/*",
//             "*://*.papajohns.co.uk/*",
//             "*://*.just-eat.co.uk/*",
//             "*://*.hungryhouse.co.uk/*",
//             "*://*.grubhub.com/*",
//             "*://*.meal2go.com/*",
//             "*://*.curriesonline.co.uk/*",
//             "*://*.eatstudent.co.uk/*"
//         ],
//         types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
//     },
//     ["blocking"]
// );





chrome.browserAction.onClicked.addListener(
    function (tab) { //Fired when User Clicks ICON
        chrome.tabs.executeScript(
            tab.id, 
            {
                "code": "toggle()"
            }, 
            function () { // Execute your code
                console.error("Script Executed .. "); // Notification on Completion
            }
        )
    }
);

chrome.webRequest.onBeforeRequest.addListener(
    requestListener,
    {
        urls: [
            "*://*/*"
            // "*://*.dominos.co.uk/*",
            // "*://*.papajohns.co.uk/*",
            // "*://*.just-eat.co.uk/*",
            // "*://*.hungryhouse.co.uk/*",
            // "*://*.grubhub.com/*",
            // "*://*.meal2go.com/*",
            // "*://*.curriesonline.co.uk/*",
            // "*://*.eatstudent.co.uk/*"
        ],
        //types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
        types: ["*"]
    },
    ["blocking"]
);      