public class FIndEvenDigitsLeetcode {
    public static void main(String[] args) {
        int[] nums = {12,345,2,6,7896};
//        System.out.println(findNumbers(nums));
        System.out.println(digits(7867688));
    }

    static int findNumbers(int[] nums) {
        int count = 0;

        for (int num : nums){
            if(even(num)){
                count++;
            }
        }
        return count;
    }

    static boolean even(int nums){
        int numbersOfDigit = digits(nums);
        return numbersOfDigit % 2 == 0;

    }

     static int digits(int num) {
        if(num > 0){
            num = num * -1;

        }

        return (int)(Math.log10(num)) + 1;
    }


}
