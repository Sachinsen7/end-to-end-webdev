import java.util.Scanner;

public class DiscountOfProduct {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter Amount: ");
        int amount = input.nextInt();
        System.out.println("Enter Discount: ");
        int percentage = input.nextInt();



        int discount = (int) (amount * (percentage / 100.0));
        int finalPrice = amount - discount;
        System.out.println(discount);
        System.out.println(finalPrice);



    }
}
