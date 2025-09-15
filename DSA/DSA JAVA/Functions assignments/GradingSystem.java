import java.util.Scanner;

public class GradingSystem {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int mark = input.nextInt();

        System.out.println("Enter your marks: ");
        int marks = findGrade(mark);
        System.out.println(marks);
    }

    private static int findGrade(int mark) {
        if(mark >= 90 && mark < 100){
            System.out.println("grade: AA");
        } else if (mark >= 80 && mark <= 90 ){
            System.out.println("grade: BB");
        } else if (mark >= 70 && mark <= 80){
            System.out.println("grade: CC");
        } else if (mark >= 60 && mark <= 70){
            System.out.println("grade: BC");
        } else if (mark >= 50 && mark <= 40){
            System.out.println("grade: CD");
        } else{
            System.out.println("Fail");
        }
        return mark;
    }
}
