var exec_count_on = 0

chrome.runtime.onMessage.addListener(function(request, sender, sendRequest){
exec_count_on = request;
});
