import java.util.Scanner;

public class TotalSurfaceAreaOfCube {
    public static void main(String[] args) {

//        formula TSA=6a2

        Scanner input = new Scanner(System.in);
        System.out.print("Enter side");
        int side = input.nextInt();
        double Volume;


        Volume = 6 * side * side;
        System.out.println(Volume);
    }
}
