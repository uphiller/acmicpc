
//https://www.acmicpc.net/problem/1539

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var size = parseInt(input[0]);
var array = [];
for(var i = 1 ; i <= size ; i++){
    array.push(parseInt(input[i]))
}

var node = {value:array[0], left:null, right:null};
var sumHeight = 0;

function insert(root, element, height){
  if(root.value > element){
    if (root.left) {
      insert( root.left, element, height+1);
    } else {
      var leftNode = {value:element, left:null, right:null};
      root.left = leftNode;
      sumHeight += height;
    }
  }else{
    if (root.right) {
      insert( root.right, element, height+1);
    } else {
      var rightNode = {value:element, left:null, right:null};
      root.right = rightNode;
      sumHeight += height;
    }
  }
};

for (var i=1; i < size ; i++) {
  insert(node, array[i], 2);
}

console.log(sumHeight+1);
