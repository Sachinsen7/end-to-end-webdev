import java.util.Scanner;

public class IsPrime {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int num = input.nextInt();

        boolean Prime = isPrime(num);
        System.out.println(Prime);
    }

    // first method
//    private static boolean isPrime(int num) {
//        int c = 2;
//        while (c  <= num){
//            if(num % c == 0){
//                return false;
//            }
//        }
//
//        return true;
//    }

    // second method
//    private static boolean isPrime(int num) {
//        int c = 2;
//        if( num<= 1) return false;
//        while (c * c <= num){
//            if(num % c == 0){
//                return false;
//            }
//        }
//
//        return true;
//    }

    // second method
    private static boolean isPrime(int num) {
        int c = 3;
        if(num <= 1) return false;
        if(num == 2) return false;
        if(num % 2 == 0) return false;

        if( num <= 1) return false;
        while (c * c <= num){
            if(num % c == 0){
                return false;
            }
            c += 2;

        }

        return true;
    }


}
