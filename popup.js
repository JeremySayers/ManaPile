document.getElementById('updateButton').addEventListener('click', updateCardList);

chrome.storage.sync.get(['cardList'], function(obj) {
    globalCardList = obj.cardList;
    
    var listLength = globalCardList.length;
    var cardListText = "";
    for (var i = 0; i < listLength; i++){
        cardListText = cardListText + globalCardList[i] + "\n";
    }
    
    document.getElementById('cardListTextArea').value = cardListText;
})
console.log("This might be running");

function updateCardList() {
    let cardListTextArea = document.getElementById('cardListTextArea');
    let cardList = cardListTextArea.value.split("\n");

    chrome.storage.sync.set({'cardList': cardList}, function() {
        console.log("Saved the card list!", cardList[0]);
    })
}