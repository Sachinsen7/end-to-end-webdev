import java.util.Scanner;

public class FactorialNum {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter a number: ");
        int num = input.nextInt();


        System.out.println(Factorial(num));


    }

    public static long Factorial(int num) {
        if(num <= 1) return 1;
        return num * Factorial(num - 1);
    }
}
