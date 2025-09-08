import java.util.Arrays;

public class maxValue {
    public static void main(String[] args) {
        int [] nums = {1, 3, 645, 32, 32};
        Max(nums);
        System.out.println(Arrays.toString(nums));


    }

    private static void Max(int[] nums) {
        int maxVal = nums[0];
        // add edge case;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > maxVal) {
                maxVal = nums[i];
            }

        }
        System.out.println(maxVal);


    }


}
