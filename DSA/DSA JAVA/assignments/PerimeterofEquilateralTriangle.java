import java.util.Scanner;

public class PerimeterofEquilateralTriangle {
    public static void main(String[] args) {
//        formula => Perimeter=3a
        Scanner input = new Scanner(System.in);
        int side = input.nextInt();
        double area;

        area = 3 * side;
        System.out.println(area);
    }
}
