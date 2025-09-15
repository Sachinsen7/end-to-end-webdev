import java.util.Scanner;

public class PerimeterOfParallelogram {
    public static void main(String[] args) {
//        formula => Perimeter=2(a+b) => , where a and b are the lengths of the adjacent sides.

        Scanner input = new Scanner(System.in);
        System.out.println("enter side a");
        int a = input.nextInt();
        System.out.println("enter side b");
        int b = input.nextInt();
        double area;


        area = 2 * (a * b);
        System.out.println(area);


    }
}
