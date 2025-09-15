import java.util.Scanner;

public class LargestNumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter first Number");
        int num1 = input.nextInt();

        System.out.print("Enter Second Number");
        int num2 = input.nextInt();

        if(num1 > num2){
            System.out.println("Largest number: " + num1);
        } else {
            System.out.println("Largest Number: " + num2);
        }
    }
}
