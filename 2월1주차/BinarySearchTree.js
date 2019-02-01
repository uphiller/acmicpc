
//https://www.acmicpc.net/problem/1539

let P =[9,1,4,3,2,5,6,7,8,0]

    const node = {value:9, left:null, right:null};
    let sumHeight = 0;

    const insert = (root, element, height) => {
      if(root.value > element){
        if (root.left) {
          insert( root.left, element, height+1);
        } else {
          const leftNode = {value:element, left:null, right:null};
          root.left = leftNode;
          sumHeight += height;
        }
      }else{
        if (root.right) {
          insert( root.right, element, height+1);
        } else {
          const rightNode = {value:element, left:null, right:null};
          root.right = rightNode;
          sumHeight += height;
        }
      }
   };

    for (let i=1; i < 10 ; i++) {
      insert(node, P[i], 2);
    }

    console.log(sumHeight+1);
