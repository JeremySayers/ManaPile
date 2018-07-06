var globalCardList = ['test'];

chrome.storage.sync.get(['cardList'], function(obj) {
    globalCardList = obj.cardList;
    
    var listLength = globalCardList.length;

    for (var i = 0; i < listLength; i++){
        card = globalCardList[i].split(" ");
        if (!isNaN(card[0])) {
            card.shift();
            globalCardList[i] = card.join(" ");
        }
    }

    console.log(globalCardList);
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, myfilter, false);
    
    while (walker.nextNode()) {
        var ownedDiv = document.createElement("div");
        var content = document.createTextNode('Owned');
        ownedDiv.appendChild(content);

        ownedDiv.style.borderRadius = "5px";
        ownedDiv.style.zIndex = "4";
        ownedDiv.style.position = "absolute";
        ownedDiv.style.left = ".5em";
        ownedDiv.style.bottom = "1.5em";
        ownedDiv.style.display = "block";
        ownedDiv.style.color = "white";
        ownedDiv.style.fontSize = "1em";
        ownedDiv.style.backgroundColor = "#49ed4c";
        ownedDiv.style.paddingLeft = "1px";
        ownedDiv.style.paddingRight = "1px";
        ownedDiv.className = "ownedDiv";
        console.log("We Made a Div!");

        walker.currentNode.childNodes[1].appendChild(ownedDiv);
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

