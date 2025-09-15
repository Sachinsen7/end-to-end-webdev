import java.util.Arrays;
import java.util.Scanner;

public class MultiDimensionalArray {
    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);

        //Strings are immuatable
        // array are mutable

        int[][] arr = new int[3][];  //rows are necessary columns are not!!
        System.out.println(arr);

        //lets say

        int[][] newArr = {
                {1, 2, 3},
                {4, 5},
                {7, 8, 9},
        };

//        System.out.println(newArr[0][1]);
//        cool

        int[][] array = new int[3][3];
//
//        System.out.println(array.length);  // it counts only rows it will print 9

        // input
//        for (int row = 0; row < array.length; row++) {
//            for (int col = 0; col < array[row].length; col++) {
//                    array[row][col] = in.nextInt();
//            }
//        }

        for (int row = 0; row < array.length; row++) {
            for (int col = 0; col < array[row].length; col++) {
                System.out.print(array[row][col] + " ");
            }
            System.out.println();
        }

        // perfect
        // you can do that too

        for (int row = 0; row < array.length; row++) {
            System.out.println(Arrays.toString(array[row]));
        }

        for (int[] arr1: array){  // use int[]
            System.out.println(Arrays.toString(arr1));
        }

        // columns not fixed

//        for (int row = 0; row < newArr.length; row++) {
//            for (int col = 0; col < newArr[row].length; col++) {
//                newArr[row][col] = in.nextInt();
//            }
//        }

        int[][] newArray = {
                {1, 2, 3, 4},
                {5, 6},
                {7, 8, 9, 10}
        };

        for (int row = 0; row < newArray.length; row++) {
            for (int col = 0; col < newArray[row].length; col++) {
                System.out.print(newArray[row][col] + " ");
            }
            System.out.println();
        }






    }
}
