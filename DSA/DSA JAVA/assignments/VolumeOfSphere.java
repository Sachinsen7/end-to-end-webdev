import java.util.Scanner;

public class VolumeOfSphere {
    public static void main(String[] args) {
//        fomula => 4/3Pir3

        Scanner input = new Scanner(System.in);
        System.out.print("Enter radius");
        int radius = input.nextInt();

        double Volume;

        Volume = 1.3 * Math.PI * radius * 3;
        System.out.println(Volume);
    }
}
