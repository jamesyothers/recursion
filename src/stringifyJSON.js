// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  console.log(obj);
  if (typeof obj === 'number') {
    return obj.toString();
  } else if (obj === null) {
    return 'null';
  } else if (obj === true) {
    return 'true';
  } else if (obj === false) {
    return 'false';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj) && obj.length === 0) {
    return "[]";
  } else if (Array.isArray(obj)) {
    var result = "[" + obj.map(function(element,index,obj) {
      return stringifyJSON(element);    
    });
    return result + "]";               
  } else if (typeof obj === 'object' && Object.keys(obj).length === 0) {
    return "{}";
  } else if (typeof obj) {
    var result = "{";
    var counter = 0;
    for (var key in obj) {
      if (counter) {
        result += ',';
      }
      if (!(key === 'functions' || key === 'undefined' || typeof obj[key] === 'function' || obj[key] === 'undefined')) {
        result += (stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
        counter++;
      }
    }
    return result + "}";
  } else {
    return undefined;
  }
};
