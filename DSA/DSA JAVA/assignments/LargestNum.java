import java.util.Scanner;

public class LargestNum {
    public static void main(String[] args) {
        Scanner input;
        input = new Scanner(System.in);

        System.out.println("Enter first number");
        int num1 = input.nextInt();
        System.out.println("Enter second number");
        int num2 = input.nextInt();
        System.out.println("Enter third number");
        int num3 = input.nextInt();

        int max = num1;

        if(max < num2){
            max = num2;
        }

        if (max < num3) {
            max = num3;
        }

        System.out.println(max);
    }
}
