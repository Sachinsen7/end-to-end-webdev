import java.util.ArrayList;
import java.util.Scanner;

public class DemoListArray {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        ArrayList<Integer> list = new ArrayList<Integer>(5);

        // for adding elements in list
        list.add(4);
        list.add(7);
        list.add(5);
        list.add(6);
        list.add(9);
        list.add(121);

//        System.out.println(list);
//        cool


        System.out.println(list.contains(121));

        list.set(0, 34);  // for inserting the element in the place of o
        System.out.println(list);

        list.remove(3);
        System.out.println(list);

        // for input
        for (int i = 0; i < 5; i++) {
            list.add(input.nextInt());
        }

        // for output

        for (int i = 0; i < 5; i++) {
            System.out.println(list.get(i));
        }




    }
}
