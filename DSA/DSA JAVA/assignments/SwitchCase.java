import java.util.Scanner;

public class SwitchCase {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String fruit = input.next();

        switch (fruit) {
            case "mango" -> System.out.println("King of fruits");
            case "orange" -> System.out.println("Orange");
            case "apple" -> System.out.println("Apple");
            default -> System.out.println("Np fruits");
        }

    }
}
