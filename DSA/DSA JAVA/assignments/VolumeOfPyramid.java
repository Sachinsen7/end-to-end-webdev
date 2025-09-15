import java.util.Scanner;

public class VolumeOfPyramid {
    public static void main(String[] args) {
        // formula => 1/ 3 x Area Base x Height

        Scanner input = new Scanner(System.in);
        System.out.print("Enter area base");
        int areaBase = input.nextInt();
        System.out.print("Enter height");
        int height = input.nextInt();
        double Volume;

        Volume = 0.3 * Math.PI * areaBase * height;
        System.out.println(Volume);
    }
}
