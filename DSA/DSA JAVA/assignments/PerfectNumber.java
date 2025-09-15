import java.util.Scanner;

public class PerfectNumber {

    public static boolean isPerfect(int n){
        int sum = 0;
        for (int i = 1; i < n; i++) {
            if (n % i == 0) {
                sum += i;
            }
        }

        // 28 => 1 + 2 +  4 +  7 +  14 = 28 and all divisival
        return sum == n;
    }
    public static void main(String[] args) {
       int number = 44;
        if (isPerfect(number)) {
            System.out.println(number + " Is Perefct Number");
        } else {
            System.out.println(number + " Is not Perfect Number");
        }

    }
}
