import java.util.Scanner;

public class CircumferenceArea {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter radius: ");
        int radius = input.nextInt();

        double Circumference = Circum(radius);
        double Area = AreaOfCircle(radius);


        System.out.println("Circumference is " + Circumference);
        System.out.println("Area Of Sircle is " + Area);
    }

    private static double AreaOfCircle(int radius) {
        return Math.PI * Math.pow(radius, 2);
    }

    private static double Circum(int radius) {
        return 2 * Math.PI * radius;
    }


}
