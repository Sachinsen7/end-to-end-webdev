import java.util.ArrayList;
import java.util.Scanner;

public class MultidimensinalList {
    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);
        // multidimensional array in array List

        ArrayList<ArrayList<Integer>> newList = new ArrayList<>();
        for (int i = 0; i < 3; i++) {
            newList.add(new ArrayList<>());
        }

        // add elements

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                newList.get(i).add(in.nextInt());
            }

        }
        System.out.println(newList);

    }

}
