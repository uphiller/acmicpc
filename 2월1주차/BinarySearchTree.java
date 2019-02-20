import java.util.Scanner;
import java.util.ArrayList;

public class Main{
  public static int i, n, h[];
  public static ArrayList<Integer> list = new ArrayList<>();
  public static void main(String[] args) throws Exception{
    Scanner sc = new Scanner(System.in);

    long sum = 0;
    n = sc.nextInt(); h = new int[n];
    for(i=0 ; i<n; i++) sum += getHeight(sc.nextInt());
    System.out.println(sum);

    sc.close();
  }

  private static int lowerBound(ArrayList<Integer> al, int front, int rear, int key){
    while(front < rear){
      int mid = (front + rear) >>> 1;
      if(al.get(mid) < key) front = mid + 1;
      else rear = mid;
    }
    return rear;
  }

  private static int getHeight(int node){
    int lb, left, right, size = list.size();

    lb = lowerBound(list, 0, size, node);
    left = lb>0 ? h[list.get(lb-1)] : 0;
    right = lb<size ? h[list.get(lb)] : 0;

    h[node] = Math.max(left, right)+1;
    list.add(lb, node);

    return h[node];
  }


}
