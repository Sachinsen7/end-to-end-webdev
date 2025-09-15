import java.util.Scanner;

public class LCMHCF {
    public static void main(String[] args) {
        int temp1, temp2, num1, num2, temp, lcm, hcf;

        Scanner input = new Scanner(System.in);
        System.out.print("Enter num1: ");
        num1 = input.nextInt();
        System.out.print("Enter num2: ");
        num2 = input.nextInt();

        temp1 = num1;
        temp2 = num2;

        while(temp2 != 0){
            temp = temp2;
            temp2 = temp1 % temp2;
            temp1 = temp;
        }

        hcf = temp1;
        lcm = num1 * num2 / hcf;

        System.out.println("Least Common Multiple: " + lcm);
        System.out.println("Highest Common Multiple: " + hcf);

    }


}
