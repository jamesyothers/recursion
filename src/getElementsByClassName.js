// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var result = [];
  //console.log(className);
  if (className === document.body.className) {
    result.push(document.body);
  };
  //console.log(document.body);

  //console.log(document.body.childNodes.length);
  var elements = document.body.childNodes;
  //console.log(elements.length);
  //console.log(elements);
  for (var i=0; i < elements.length; i++) {
    //console.log(elements[3]);
    //console.log(elements[3].classList);
    if (elements[i].classList && elements[i].classList.contains(className)) {
      result.push(elements[i]);
    }
  }

  //elements.forEach(function(element,index,elements) {
  //  console.log(element);
  //});
  //console.log(document.body);
  //console.log(document.body.className);
  
  return result;
  //console.log(document.body.className.childNodes);  //undefined
  //console.log((className === document.body.className) ? result.push(document.body):result);
  //return (className === document.body.className) ? result.push(document.body):result;
  //element.classList 
  //element.className,  check if an element's list of classes contains a specific class
};
