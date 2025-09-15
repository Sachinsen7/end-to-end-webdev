import java.util.Scanner;

public class VolumeOfCone {
    public static void main(String[] args) {
        //formula => 1 / 3 Pi r sqaure h

        Scanner input = new Scanner(System.in);
        System.out.print("Enter radius");
        int radius = input.nextInt();
        System.out.print("Enter height");
        int height = input.nextInt();
        double Volume;

        Volume = 0.3 * Math.PI * radius * height;
        System.out.println(Volume);


    }
}
