public class OrderagnosticBS {

    public static void main(String[] args) {
        int[] arr = {-12, -11, 1, 3, 5, 8 ,9, 21, 34, 56, 90};
        int target = 8;

        int ans = orderagnostic(arr, target);
        System.out.println(ans);
    }
    static int orderagnostic(int[] arr, int target){
        int start = 0;
        int end = arr.length - 1;


        boolean isAsc = arr[start] < arr[end];
        while (start <= end){
            int mid = start + (end - start) / 2;

            if(target == arr[mid]){
                return mid;
            }

            if(isAsc){
                if(target < arr[mid]){
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            } else {
                if(target > arr[mid]){
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
        }

        return -1;
    }
}
