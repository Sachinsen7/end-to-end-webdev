public class AddTwoSum {
    public static void main(String[] args){
        int[] nums = {2, 7, 11, 15};
        int target = 9;

        Solution solution = new Solution();
        int[] result = solution.twoSum(nums, target);

        if(result.length == 2){
            System.out.println("Indices: " + result[0] + " " + result[1]);
        } else{
            System.out.println("No two numbers found");
        }

    }
}

class Solution {
    public int[] twoSum(int[] nums, int target){
        int n = nums.length;
        for(int i = 0; i < n - 1; i++){
            for (int j = i + 1; j < n; j++) {
                if((nums[i] + nums[j]) == target){
                    return new int[]{i, j};
                }
            }

        }
        return new int[]{};
    }
}
