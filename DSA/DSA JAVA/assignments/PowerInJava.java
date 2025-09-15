import java.util.Scanner;

public class PowerInJava {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int Number = input.nextInt();

        double power = Math.pow(Number, 2);
        System.out.println("Power" + power);
    }
}
