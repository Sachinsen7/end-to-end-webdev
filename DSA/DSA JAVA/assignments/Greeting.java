import java.util.Scanner;

public class Greeting {
    public static void main(String[] args) {
        Scanner name = new Scanner(System.in);
        System.out.println("Enter Your Name");
        String word = name.nextLine();

        System.out.println("Hello, " + word);
    }
}
