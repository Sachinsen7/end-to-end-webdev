import java.util.Scanner;

public class ArmstrongNum {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int number = input.nextInt();
        int remainder;
        int result = 0;

        int originalNumber = number;
        while(originalNumber != 0){
            remainder = originalNumber % 10;  //to get last digit
            System.out.println(remainder);
            result += Math.pow(remainder, 3);
            System.out.println(result);
            originalNumber /= 10; //doing division
        }

        if(result == number){
            System.out.println("Its A Armstrong Number");
        } else {
            System.out.println("Its Not a ArmStrong Number");
        }

        input.close();
    }
}
