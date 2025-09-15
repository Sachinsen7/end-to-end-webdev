import java.util.Scanner;

public class EvenOdd {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a Number: ");
        int num = input.nextInt();

        int evenOd = evenOdd(num);
        System.out.println(evenOd);
    }

    private static int evenOdd(int num) {
        if(num % 2 == 0){
            System.out.println("Even");
        } else {
            System.out.println("Odd");
        }

        return num;
    }
}
