// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  if (!result) {
    var result = [];
    if (className === document.body.className) {
      result.push(document.body);
    }
    var counter = 0;
    var elements = document.body.childNodes;
  }
  console.log(document.body);
  console.log(elements);

  for (var i=0; i < elements.length; i++) {
      console.log(elements[i]);
    if (elements[i].classList && elements[i].classList.contains(className)) {
      //console.log(elements[i]);
      result.push(elements[i]);

      //console.log(elements[i].childNodes);
      //if (elements[i].childNodes) {
      //  elements = elements[i].childNodes;
      //  getElementsByClassName(className);  
      //} 
    } 

  }
/*

    if (elements[i].childNodes.length > 0) {
      console.log(elements[i].childNodes);
      elements = elements[i].childNodes;
      console.log(elements);
      //getElementsByClassName(className);  
    }
 /*
  for (var j=0; j < elements.length; j++) {
    while (elements[j].childNodes.length > 0) {
      elements = elements[j].childNodes;
      //getElementsByClassName(className);
      if (elements[j].classList && elements[j].classList.contains(className)) {
        result.push(elements[j]);
      }
    }

  }
*/
  counter++;

  
  
    /*
    if (elements[i].childNodes.length > 0) {
      
      
      for (var j=0; j < elements[i].childNodes.length; j++) {
      
        if (elements[i].childNodes[j] && elements[i].childNodes[j].classList.contains(className)) {
          //console.log(elements[i].childNodes[j]);
          result.push(elements[i].childNodes[j]);
        }
      }
    }
  */
  
  return result;
  
};
