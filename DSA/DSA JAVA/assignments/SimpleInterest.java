import java.util.Scanner;

public class SimpleInterest {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter Principle");
        int Principle = input.nextInt();
        System.out.print("Enter Time");
        int Time = input.nextInt();
        System.out.print("Enter Rate");
        int rate = input.nextInt();

        int SI = Principle * Time * rate;
        int A = Principle * (1 + Time * rate);
        // simple Interest
        System.out.println("Simple Interest: " + SI);
        System.out.println("Total Amount: " + A);

        input.close();
    }
}
