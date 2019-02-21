
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

import java.util.Scanner;
import java.util.ArrayList;

public class Main{
  public static int i, n, h[];
  public static ArrayList<Integer> list = new ArrayList<>();
  public static void main(String[] args) throws Exception{
    Scanner sc = new Scanner(System.in);
    n = sc.nextInt();
    for(int i = 0 ; i <= n ; i++){
        System.out.println(fibo(i));
    }
   
    sc.close();
  }
  
  public static int fibo(int n) {
    if (n <= 1)
        return n;
    else 
        return fibo(n-2) + fibo(n-1);
  }
}
