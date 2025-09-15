import java.util.Arrays;

public class Selection {
    public static void main(String[] args) {
        int[] arr = {8, 6, 5, 4, 3, 2, 1};
        selectionSort(arr);
        System.out.println(Arrays.toString(arr));
    }

    static void selectionSort(int[] num){
        for (int i = 0; i < num.length; i++) {
            int last = num.length - i - 1;
            int maxIndex = getMaxIndex(num, 0, last); 
            swap(num, maxIndex, last);
        }
    }

    static int getMaxIndex(int[] arr, int start, int end){
        int max = start;

        for (int i = 0; i <= end; i++) {
            if(arr[max] < arr[i]){
                max = i;
            }
        }
        return max;
    }

    static void swap(int[] arr, int start, int end){
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    }


}
