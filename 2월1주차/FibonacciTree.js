
//https://www.acmicpc.net/problem/1646

var node = {value:3, left:null, right:null};
fib(node.value,node);

function fibonacci(n, node){
    if(n<=1){
      return n;
    }
    else{
      var leftNode = {value:n-2, left:null, right:null};
      node.left = leftNode;
      var rightNode = {value:n-1, left:null, right:null};
      node.right = rightNode;
      return (fib(n-1, rightNode)+fib(n-2, leftNode));
    }
} 
