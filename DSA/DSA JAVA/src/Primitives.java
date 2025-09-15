import java.util.Scanner;

public class Primitives {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int rollno = 12;
        float marks = 67.8f;
        char letter = 'e';
        double largeNumberDecimal = 3442455.809;
        boolean check = false;

        // these are class
        Integer rno = 344;
        rno.equals(rollno);


        //input integer
//        System.out.print("Please enter some input: ");
//        int rollnumber = input.nextInt();
//        System.out.println("your roll number is : " + rollnumber);
//
//        input.close();

        int num = 234_000_000;
        System.out.println(num);


        // string input

//        String name = input.nextLine();
//        System.out.println(name);

        //float

        float markss = input.nextFloat();
        System.out.println(markss);

    }
}
