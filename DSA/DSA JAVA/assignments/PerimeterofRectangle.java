import java.util.Scanner;

public class PerimeterofRectangle {
    public static void main(String[] args) {

        //formula => Perimeter=2(l+w)
        Scanner input = new Scanner(System.in);
        System.out.println("enter side length ");
        int length = input.nextInt();
        System.out.println("enter side width");
        int width = input.nextInt();
        double area;

        area = 2 * (length + width);
        System.out.println(area);
    }
}
