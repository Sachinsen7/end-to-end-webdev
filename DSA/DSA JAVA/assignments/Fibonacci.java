import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) {
        int n = 10, firstTerm = 0, secondTerm = 1;
        System.out.println("fibonacci Series " + n + " terms");

        for (int i = 1; i <= n; i++) {
            System.out.print(firstTerm + " , ");

            int nextTerm = firstTerm + secondTerm;
            firstTerm = secondTerm;
            secondTerm = nextTerm;

        }
    }
}
