import java.util.Scanner;

public class VolumeOfPrism {
    public static void main(String[] args) {

//        formula => Volume=BaseArea×Height
        Scanner input = new Scanner(System.in);
        System.out.print("Enter base Area");
        int baseArea = input.nextInt();
        System.out.print("Enter height");
        int height = input.nextInt();
        double Volume;


        Volume = baseArea * height;
        System.out.println(Volume);
    }
}
