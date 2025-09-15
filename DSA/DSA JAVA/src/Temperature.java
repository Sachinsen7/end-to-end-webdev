import java.util.Scanner;

public class Temperature {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Please Enter Temperature ");
        float tempC = in.nextFloat();
        float tempF = (tempC * 9/5) + 32;  // it is formula
        System.out.println(tempF);

    }
}
