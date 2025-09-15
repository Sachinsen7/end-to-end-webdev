import java.util.Arrays;

public class Bubble {
    public static void main(String[] args) {
        int[] ans = {4, 5, 7, 2, 1};
        bubble(ans);
        System.out.println(Arrays.toString(ans));
    }

    static void bubble(int[] arr){
        boolean swapped;

        for (int i = 0; i < arr.length; i++) {

            swapped = false;

            for (int j = 1; j < arr.length - i; j++) {

                if(arr[j] < arr[j - 1]){
                    int temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                    swapped = true;
                }
            }

            if(!swapped){
                break;
            }
        }
    }
}
