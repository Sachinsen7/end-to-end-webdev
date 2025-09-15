import java.util.Scanner;

public class ProductOfTwo {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        System.out.print("Enter first number: ");
        int num1 = input.nextInt();
        System.out.print("Enter second number: ");
        int num2 = input.nextInt();
        int Product = ProductOfTwoNum(num1, num2);
        System.out.println("the Product is " + Product);
    }

    private static int ProductOfTwoNum(int num1, int num2) {
        return  num1 * num2;
    }
}

