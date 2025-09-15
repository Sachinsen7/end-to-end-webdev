public class CeilingOfNumber {
    public static void main(String[] args) {
        int[] nums = {2, 3, 4, 5, 9, 14, 16, 18};
        int target = 15;

        System.out.println(ceiling(nums, target));
    }

    static int ceiling(int[] nums, int target){

        if(target > nums[nums.length - 1]){
            return -1;
        }
        int start = 0;
        int end = nums.length - 1;

        while (start <= end){

            int mid = start + (end - start) / 2;

            if(target > nums[mid]){
                start = mid + 1;
            } else if(target < nums[mid]){
                end = mid - 1;
            } else{
                return mid;
            }
        }
        return start;
    }
}
