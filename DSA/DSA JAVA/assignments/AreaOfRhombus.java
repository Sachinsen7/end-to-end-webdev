import java.util.Scanner;

public class AreaOfRhombus {
    public static void main(String[] args) {

        //formula = Area = (diagonal1 × diagonal2) / 2
        Scanner input = new Scanner(System.in);
        System.out.println("Enter diagonal1");
        int diagonal1 = input.nextInt();
        System.out.println("Enter diagonal2");
        int diagonal2 = input.nextInt();
        int area;

        area = (diagonal1 * diagonal2) / 2;
        System.out.println(area);
    }
}
