import java.util.Scanner;

public class Calculations {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter first Number");
        int num1 = input.nextInt();

        System.out.print("Enter Second Number");
        int num2 = input.nextInt();

        System.out.print("Enter Operator");
        char operator = input.next().charAt(0);

        double result;
        if(operator == '+'){
            result = num1 + num2;
            System.out.println(num1 + " + " + num2 + " = " + result);
        } else if (operator == '-'){
            result = num1 - num2;
            System.out.println(num1 + " - " + num2 + " = " + result);
        } else if(operator == '*'){
            result = num1 * num2;
            System.out.println(num1 + " * " + num2 + " = " + result);
        } else if(operator == '/'){
            result = num1 / num2;
            System.out.println(num1 + " / " + num2 + " = " + result);
        } else {
            System.out.println("Invalid Operator");
        }

    }
}
