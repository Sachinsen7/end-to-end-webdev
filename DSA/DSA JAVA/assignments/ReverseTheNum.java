import java.util.Scanner;

public class ReverseTheNum {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int num = 6765435;
        int ans = 0;

        while(num > 0){
            int rem = num % 10;  //reminder
            num /= 10;
            ans = ans * 10 + rem;  //its like 5 * 10 + rem
        }

        System.out.println(ans);
    }
}
