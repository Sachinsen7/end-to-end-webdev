public class Binarysearch {
    public static void main(String[] args) {
    int[] arr = {-12, -11, 1, 3, 5, 8 ,9, 21, 34, 56, 90};

    int target = 8;
    int ans = binarySearch(arr, target);
    System.out.println(ans);


    }

    static int binarySearch(int[] arr, int target){
        int start = 0;
        int end = arr.length - 1;

        while (start <= end){

            int mid = start + (end - start) / 2;

            if(target < arr[mid]){
                end = mid - 1;
            } else if (target > arr[mid]) {
                start = start + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}

