import java.util.Scanner;

public class EvenOdd {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter Your Number...");
        int num = input.nextInt();

        if(num % 2 == 0){
            System.out.println("The Even Number...");
        } else {
            System.out.println("The Odd Number.....");
        }

        input.close();
    }
}
