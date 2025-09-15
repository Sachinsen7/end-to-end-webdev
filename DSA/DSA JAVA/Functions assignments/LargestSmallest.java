import java.util.Scanner;

public class LargestSmallest {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter first number: ");
        int firstNum = input.nextInt();

        System.out.print("Enter second number: ");
        int secondNum = input.nextInt();

        System.out.print("Enter third number: ");
        int thirdNum = input.nextInt();

        int Largest = Largest(firstNum, secondNum, thirdNum);
        int Smallest = Smallest(firstNum, secondNum, thirdNum);

        System.out.println("Largest Numbers are" + Largest);
        System.out.println("Smallest Numbers are" + Smallest);
    }

    private static int Smallest(int firstNum, int secondNum, int thirdNum) {
        int max = firstNum;
        if(secondNum < firstNum){
            max = secondNum;
        }
        if (thirdNum < secondNum){
            max = thirdNum;
        }

        return max;

    }

    private static int Largest(int firstNum, int secondNum, int thirdNum) {
        int min = firstNum;
        if(secondNum > firstNum){
            min = secondNum;
        }
        if (thirdNum > secondNum){
            min = thirdNum;
        }

        return min;
    }
}
