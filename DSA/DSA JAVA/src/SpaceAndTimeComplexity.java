public class SpaceAndTimeComplexity {
    public static void main(String[] args){

        // constant 0(1)

        int[] arr = new int[]{1, 2, 3, 4, 5};
        arr[0] = arr[0] + 10;  // 0(1)
        System.out.println(arr[0]);   // T.C is 0(1)


        //  S.C is o(1)

        // Linear O(n)


        int[] arr2 = new int[]{1, 2, 3, 4, 5};
        arr[0] = arr[0] + 1;

        for (int i = 0; i < arr2.length; i++) {
            System.out.println(arr2[i]);
        }
        // O(1) + O(n) => O(n)

        // in space complexity which scenario we get O(n)
        System.out.println("+++++++++++++++++++");

        int[] newArray = new int[arr2.length];
        for (int i = 0; i < arr2.length; i++) {
            newArray[i] = arr[i];
        }

        for(int num : newArray){
            System.out.println(num);
        }
    }
}
