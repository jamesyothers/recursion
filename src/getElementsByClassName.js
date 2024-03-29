// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
    var result = [];
    
    var checkNode = function(node) {
        //if the node has the class we're looking for, add it to the result array
        if (node.classList && node.classList.contains(className)) {
            result.push(node);
        }
        
        //if the node has children, look at each child
        if (node.childNodes) {
            for (var i = 0 ; i < node.childNodes.length ; i++ ) {
                 checkNode(node.childNodes[i]);
            }
        }
        
    };
    //start the recursive function on the first page node
    checkNode(document.body);
    
    return result;
}; 