import java.util.Scanner;

public class SumOfNegativePositive {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int num;
        int sumNegative = 0;
        int sumEven = 0;
        int sumOdd = 0;

        System.out.println("Enter Numbers (0 to stop))");

       while(true){
           num = input.nextInt();
           if(num == 0) break;

           if(num < 0){
               sumNegative =+ num;
           } else if (num % 2 == 0) {
               sumEven += num;
           } else {
               sumOdd += num;
           }

       }
        System.out.println("Sum of All Negative Numbers " + sumNegative);
        System.out.println("Sum of All Positive Even Numbers " + sumEven);
        System.out.println("Sum of All Positive Odd Numbers " + sumOdd);
    }
}
