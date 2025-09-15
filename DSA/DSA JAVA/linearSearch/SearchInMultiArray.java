import java.util.Arrays;

public class SearchInMultiArray {
    public static void main(String[] args) {
        int[][] arr = {
                {1, 2, 3, 4, 5},
                {6, 7, 8, 9},
                {10, 11, 12, 13, 14},
                {15, 16}
        };

        int target = 12;
        int[] ans = search(arr, target);
        System.out.println(Arrays.toString(ans));

        System.out.println(Maximum(arr));



    }

    static int[] search(int[][] arr, int target) {
        for (int row = 0; row < arr.length; row++) {
            for (int col = 0; col < arr[row].length; col++) {
                    if(target == arr[row][col]){
                        return new int[]{row, col};
                    }
            }
        }
        return new int[]{-1, -1};
    }

     static int Maximum(int[][] arr) {
        int max = Integer.MIN_VALUE;
         for (int[] ints : arr) {
             for (int anInt : ints) {
                 if (anInt > max) {
                     max = anInt;
                 }
             }
         }
        return max;
    }
}
