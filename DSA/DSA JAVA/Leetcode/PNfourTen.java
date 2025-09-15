public class PNfourTen {
    public static void main(String[] args) {

    }
    public int splitArray(int[] nums, int k) {
            int start = 0;
            int end = 0;

            for(int i = 0; i < nums.length; i++){
                start = Math.max(start, nums[i]);
                end += nums[i];
            }

            //binary search
            while(start < end){
                //try for the middle as potential ans

                int mid = start + (end - start) / 2;

                int sum = 0;
                int pieces = 1;

                for(int num : nums){
                    if(sum + num > mid){
                        //you can not this in the subArray, make new one
                        // say you addd this one in new subArray then sum = num
                        sum = num;
                        pieces++;
                    } else{
                        sum += num;
                    }
                }

                if(pieces > k){
                    start = mid + 1;
                } else{
                    end = mid;
                }
            }

            return end;
        }

}
