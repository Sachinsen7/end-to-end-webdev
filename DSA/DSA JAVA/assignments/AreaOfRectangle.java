import java.util.Scanner;

public class AreaOfRectangle {
    public static void main(String[] args) {
        //formula area => length * width

        Scanner input = new Scanner(System.in);
        int length = input.nextInt();
        int width = input.nextInt();
        int area = 0;

        area = length * width;
        System.out.println(area);
    }
}
