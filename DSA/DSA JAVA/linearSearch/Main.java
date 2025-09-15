public class Main {
    public static void main(String[] args) {
        int[] arr = {12, 34, 5, 665, 3, 12};
        int target = 665;
        int ans = linearSearch(arr, target);
        System.out.println(ans);
    }

    static int linearSearch(int[] nums, int target){
        if(nums.length == 0){
            return -1;
        }

        // for loop


        for (int index = 0; index < nums.length; index++) {
            int element = nums[index];

            if(element == target){
                return index;
            }
        }


        //for returning the element
//        for (int ele: nums){
//            if (ele == target) {
//                return ele;
//            }        }

        return  -1;
    }

}
