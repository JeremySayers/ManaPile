var globalCardList = ['test'];

chrome.storage.sync.get(['cardList'], function(obj) {
    globalCardList = obj.cardList;
    console.log(globalCardList);
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, myfilter, false);
    
    while (walker.nextNode()) {
        walker.currentNode.style.border = '3px solid green';
    }
})

myfilter = function(node){
    if (node.className=="nw"){
        if (node.getElementsByClassName('card').length > 0){
            if (globalCardList.includes(node.getElementsByClassName('nwname')[0].firstChild.nodeValue))
                return NodeFilter.FILTER_ACCEPT
        }

    }
    else
    return NodeFilter.FILTER_SKIP;
}

console.log("Something Happened");

