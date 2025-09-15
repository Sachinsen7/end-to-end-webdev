import java.util.Scanner;

public class AreaOfEquilateralTriangle {
    public static void main(String[] args) {
//        formula  sqartof(3)/4 * sqaure(a)  a=> side

        Scanner input = new Scanner(System.in);
        System.out.print("Enter Side");
        int side = input.nextInt();
        double area;

        area = (Math.sqrt(3) / 4) * Math.pow(side, 2);
        System.out.println(area);



     }
}
