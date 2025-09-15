import java.util.Scanner;

public class CanVote {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter your age: ");
        int age = input.nextInt();

        int aGe = Age(age);
        System.out.println(age);


    }

    private static int Age(int age) {
        if(age < 18){
            System.out.println("you are not eligible");
        } else if(age >= 18){
            System.out.println("You are eligible");
        } else{
            System.out.println("Invalid age");
        }

        return age;
    }
}
