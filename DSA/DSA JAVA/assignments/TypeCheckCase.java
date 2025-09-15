import java.util.Scanner;

public class TypeCheckCase {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        char ch = input.next().trim().charAt(0);

        if(ch >= 'a' && ch <= 'z'){  //(ASCII values 97–122).
            System.out.println("Lowercase");
        } else {
            System.out.println("UpperCase");
        }


    }
}
