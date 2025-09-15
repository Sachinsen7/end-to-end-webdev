public class SearchInrange {
    public static void main(String[] args) {
    int[] arr = {1,2, 3, 4, 5, 6, 7, 8, 9};
    int target = 18;

    System.out.println(linearSearch(arr, target, 1, 7));

    }


    static int linearSearch(int[] nums, int target, int start, int end){
        if(nums.length == 0){
            return -1;
        }

        // for loop


        for (int index = start; index < end; index++) {
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
