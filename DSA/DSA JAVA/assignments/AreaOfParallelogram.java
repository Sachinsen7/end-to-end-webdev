import java.util.Scanner;

public class AreaOfParallelogram {
    public static void main(String[] args) {
        //formula Area of parallelogram = b × h square units

        Scanner input = new Scanner(System.in);
        System.out.println("Enter base");
        int base = input.nextInt();
        System.out.println("Enter height");
        int height = input.nextInt();
        double area;

        area = base * height;
        System.out.println(area);
    }
}
