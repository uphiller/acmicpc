var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var n = parseInt(input[0]);

var i = 0;
var h = Array();
var list = Array();
var sum = 0;

function lowerBound(al, size, key ){
    var front = 0;
    var end = size;
	while (front < end) 
	{
	    var mid = parseInt((front + end) / 2); 
		if(typeof al[mid] == 'undefined') al[mid] = 0;
		if (al[mid] <= key) front = mid + 1;
		else end = mid; 
	}

	return end;
}

function getHeight(node){
    var lb = 0;
    var left = 0;
    var right = 0;
    var size = list.length;
   
    lb = lowerBound(list, size, node);
    if(typeof h[list[lb-1]] == 'undefined') h[list[lb-1]] = 0;
    if(typeof h[list[lb]] == 'undefined') h[list[lb]] = 0;
    left = lb > 0 ? h[list[lb-1]] : 0;
    right = lb < size ? h[list[lb]] : 0;
    h[node] = Math.max(left, right) + 1;
    list.splice(lb, 0, node);
    return h[node];
}


for(var i = 1 ; i <= n ; i++){
    sum += getHeight(parseInt(input[i]));
}

console.log(sum);
