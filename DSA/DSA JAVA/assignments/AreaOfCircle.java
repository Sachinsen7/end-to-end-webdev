import java.util.Scanner;

public class AreaOfCircle {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double radius = input.nextInt();

//        area = (Math.PI * (radius * radius));
        double area = (Math.PI * Math.pow(radius, 2));
        System.out.println("Area of circle: " + area);


    }
}
