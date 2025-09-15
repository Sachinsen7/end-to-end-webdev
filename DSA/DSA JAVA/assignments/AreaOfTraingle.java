import java.util.Scanner;

public class AreaOfTraingle {
    public static void main(String[] args) {
        //formula => 1/2 * base * height

        Scanner input = new Scanner(System.in);
        System.out.println("Enter base");
        int base = input.nextInt();
        System.out.println("Enter height");
        int height = input.nextInt();
        double area;

        area = 0.5 * (base * height);
        System.out.println(area);



    }
}
