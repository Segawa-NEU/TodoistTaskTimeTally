var unit = 'min'
var timeRegex = new RegExp('^(\\d+)' + unit + '$');
function getTimeComponent(label) {
    if (label.text.match(timeRegex)) {
        return parseInt(label.text.replace(timeRegex, '$1'));
    } else {
        return 0;
    }
}
function tallyTime(labels) {
    return Array.from(labels).map((label) => getTimeComponent(label))
        .reduce((total, cur) => total + cur, 0);
}
window.onload = function() {
    console.log('test');
    var observer = new MutationObserver(function(mutationList, observer) {
        var labels = document.getElementsByClassName("label")
        chrome.runtime.sendMessage({time: tallyTime(labels)});
    });
    var targetNode = document.querySelector("#content");
    var observerOptions = {
        childList: true,
        subtree: true
    }
    observer.observe(targetNode, observerOptions);
}

