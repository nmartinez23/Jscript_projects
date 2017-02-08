function transformEmployeeData(array) {
  var arr = [];
  var obj1 = {};
  var obj2 = {};
  var merge = [].concat.apply([], array);
  
  merge.forEach(function(data){
    if(obj1.hasOwnProperty(data[0])) {
      obj2[data[0]] = data[1];
    } else {
      obj1[data[0]] = data[1];
    }
  });
  
  arr.push(obj1, obj2);
  return arr;
}

var nested = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]
transformEmployeeData(nested);
