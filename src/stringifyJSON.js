// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  console.log(obj);
  if (typeof obj === 'number') {
    return obj.toString();
  }
  else if (obj === null) {
    return 'null';
  }
  else if (obj === true) {
    return 'true';
  }
  else if (obj === false) {
    return 'false';
  }
  else if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  else if (Array.isArray(obj) && obj.length === 0) {
    return "[]";
  }
  else if (Array.isArray(obj)) {
    var result = "[" + obj.map(function(element,index,obj) {
      return stringifyJSON(element);    
    });
    return result + "]";
    //[0,1,2,3,4].reduce(function(previousValue, currentValue, index, array){
    //obj.reduce(function(element,accumulator,index,obj) {
    //  return accumulator + element;   
    //});
    //return "[" + obj + "]";                
  }

};
