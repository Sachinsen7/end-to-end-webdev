import java.util.Scanner;

public class CountEvenDays {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int days = input.nextInt();
        int count = 0;

        for (int i = 1; i <= days; i++) {
            if(i % 2 == 0){
                count++;
            }
        }
        System.out.println("Total days" + count);
    }
}
