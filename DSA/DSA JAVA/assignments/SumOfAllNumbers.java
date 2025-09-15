import java.util.Scanner;

public class SumOfAllNumbers {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int num = 1;

        int sum = 0;
        while (num != 0){
            System.out.println("Enter number 0 to stop");
            num = input.nextInt();
            sum += num;
        }

        System.out.println("the sum of all numbers " + sum);
    }
}
