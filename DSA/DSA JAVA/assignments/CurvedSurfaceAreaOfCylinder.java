import java.util.Scanner;

public class CurvedSurfaceAreaOfCylinder {
    public static void main(String[] args) {
//        formula => CSA=2πrh

        Scanner input = new Scanner(System.in);
        System.out.print("Enter radius");
        int radius = input.nextInt();
        System.out.print("Enter height");
        int height = input.nextInt();
        double Volume;

        Volume = 2 * Math.PI * radius * height;
        System.out.println(Volume);
    }
}

