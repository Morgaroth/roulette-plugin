var global = false;
var setted = false;

var worker = function(details) 
{
    console.log("url="+details.url+", method="+details.method);
};

var requestListener = function(details) 
{
	console.log("logger eecuterd");
	if(global == true)
	{
		worker(details);	
	}
    //return {redirectUrl: host};
};

function enableListening()
{
	if(global == true)
	{
		console.log("listening already enabled");
	}
	else
	{
		console.log("enabling listening");
		global = true;
	}
};

function disableListening()
{
	if(global == false)
	{
		console.log("listening already disabled");
	}
	else
	{
		console.log("disabling listening");
		global = false;
		// wsadzenie listenera
	}
};

function toggle()
{
	if(global == true)
	{
		disableListening();
	}
	else
	{
		enableListening();
	}
};

chrome.runtime.onMessage.addListener(
	function(request, sendResponse){
        if (request.msg == "getDisabled")
        {
            sendResponse({disabled: global});
            return true;
        }
	}
);