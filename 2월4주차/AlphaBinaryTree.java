//https://www.acmicpc.net/problem/1573

import java.util.*;
 
class TreeRound{
    String array[]=new String[20];
 
    public void preOrder(String[] array,int count){
        
        if(count>=array.length){
            return;
        }
        System.out.print(array[count]+"/");
        preOrder(array,2*count+1);
        preOrder(array,2*count+2);
    }
 
    public  void inOrder(String[] array,int count){
        if(count>=array.length){
        return;
        }
        inOrder(array,2*count+1);
 
        System.out.print(array[count]+"/");
        inOrder(array,2*count+2);
 
    }
 
    public void postOrder(String[] array,int count){
 
        if(count>=array.length){
            return;
        }
        postOrder(array,2*count+1);
 
        postOrder(array,2*count+2);
 
        System.out.print(array[count]+"/");
    }
 
}
 
public class TreeRoundTest {
 
    public static void main(String[] args) {
        Scanner input=new Scanner(System.in);
        TreeRound tree=new TreeRound();
        String array[]=new String[20];
        int count=0;
 
        String a;
 
        System.out.println("숫자를 입력하시오");
        a=input.nextLine();
        
        for(int i=0;i<array.length;i++){
            array=a.split("\\s+");
        
        }
 
 
 
        System.out.println("--------------전위순회------------");
        tree.preOrder(array,count);
        System.out.println();
        System.out.println("-------------- 중위순회------------");
        tree.inOrder(array, count);
        System.out.println();
        System.out.println("--------------후위순회------------");
        tree.postOrder(array, count);
 
    }
 
}









