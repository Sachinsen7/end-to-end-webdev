import java.util.Arrays;

public class Intro {
    public static void main(String[] args) {
        // int[] variable_name = new data_type[size]

//        int[] arr = new int[7];

//        int[] arr = {1, 2, 3, 4, 5, 7};
//        System.out.println(arr[0]);

        int[] rnos = new int[5];
        //left one is called compile time
        //right one is called runtime declration => basically creating an object in heap memory

        // in java have no pointers

//        new keyword is used to create a new object


        // primitives data types stored in stack memory
        // non primitives are stored in heap memory

        int[] arr = null;  //thats not possible
//        System.out.println(arr);

//        null => this is by default value

        String str = null;
//        System.out.println(str);

        //you can create String object as welll

//        String[] string = new String[8];
//        System.out.println(string[3]);  //this time it will show us null because we havent assigned anything its just a memory allocation internally


//        lets say

        int[] array = new int[5];

        array[0] = 1;
        array[1] = 2;
        array[2] = 3;
        array[3] = 4;
        array[4] = 5;

//        System.out.println(array[1]); // cool we can use loop as well

//        for (int i = 0; i < array.length; i++) {
//            System.out.println(array[i]);
//        }

        //cool

//        we can use foreach also
//        syntax

        for(int array1: array){
            System.out.println(array1);
        }

        // we can convert this into string also using Arrays.toString()
        // lets see

        System.out.println(Arrays.toString(array));

        //cool
//        lets jump into next file there we will be learn 2d array


    }
}
