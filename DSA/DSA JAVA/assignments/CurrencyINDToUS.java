import java.util.Scanner;

public class CurrencyINDToUS {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);


        System.out.print("Enter Indian Currency: ");
        int currency = input.nextInt();

        double USD = currency * 0.0117;
        System.out.println("$" + USD);

    }
}
