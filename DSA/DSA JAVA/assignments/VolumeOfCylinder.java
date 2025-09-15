import java.util.Scanner;

public class VolumeOfCylinder {
    public static void main(String[] args) {
//        formula => Volume=πr2h

        Scanner input = new Scanner(System.in);
        System.out.print("Enter radius");
        int radius = input.nextInt();
        System.out.print("Enter height");
        int height = input.nextInt();
        double Volume;


        Volume = Math.PI * radius * radius * height;
        System.out.println(Volume);
    }
}
