import java.util.Scanner;

public class AllFactors {
    static void printDivisors(int n){
        for (int i = 1; i <= n; i++) {
            if(n % i == 0 ){
                System.out.println(i + " ");
            }
        }
    }

    public static void main(String[] args) {
        System.out.print("Divisors are: " );
        printDivisors(100);

    }
}
