public class MinMax {
    public static void main(String[] args) {
        int[] arr = {9 ,2, 3, 4, 5, 6, 7, 8, 9};

        System.out.println(Min(arr));
    }

    static int Min(int[] arr){
        int ans = arr[0];

        for (int i = 1; i < arr.length; i++) {
            if(arr[i] < ans){
                ans = arr[i];
            }
        }
        return ans;
    }
}
