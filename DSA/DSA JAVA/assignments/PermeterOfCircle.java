import java.util.Scanner;

public class PermeterOfCircle {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter radius: ");
        int radius = input.nextInt();
        double area;

        area = 2 * Math.PI * radius;
        System.out.println(area);
    }
}
