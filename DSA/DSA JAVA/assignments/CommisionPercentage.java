import java.util.Scanner;

public class CommisionPercentage {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter Total Revenue: ");
        double revAmount = input.nextInt();

        System.out.print("Enter Commision Amount: ");
        double comAmount = input.nextInt();


        double comPercentage = (comAmount / revAmount) * 100;
        System.out.println("Commison Rate " + comPercentage);

    }
}
