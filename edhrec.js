/*
var nmList = document.getElementsByClassName("nm");
var cardList = Array.prototype.filter.call(nmList, function(element, index, nmList) {
    return element.classList.contains('card');
});

var node = document.createElement("div");
var textNode = document.createTextNode("TEST");
node.appendChild(textNode);

cardList.forEach(element => {
    element.appendChild(node);
});
*/

var test = ['Bountiful Promenade', 'Utter End', 'test3' ];

myfilter = function(node){
    if (node.className=="nw"){
        if (node.getElementsByClassName('card').length > 0){
            if (test.includes(node.getElementsByClassName('nwname')[0].firstChild.nodeValue))
                return NodeFilter.FILTER_ACCEPT
        }

    }
    else
    return NodeFilter.FILTER_SKIP;
}
  
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, myfilter, false);
  
   while (walker.nextNode()) {
      walker.currentNode.style.border = '3px solid green';
   }

console.log("Something Happened");

