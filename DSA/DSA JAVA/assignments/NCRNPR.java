import java.util.Scanner;

public class NCRNPR {
    public static long Factorial(int n){

        long result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    public static long nCr(int n, int r){
        return Factorial(n) / (Factorial(r) * Factorial(n - r));
    }

    public static long nPr(int n, int r){
        return Factorial(n) / Factorial(n - r);
    }

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.print("Enter the value of n: ");
        int n = input.nextInt();

        System.out.print("Enter the value of r: ");
        int r = input.nextInt();


        long ncr = nCr(n, r);
        long npr = nPr(n, r);

        System.out.println("NPR value" + npr);
        System.out.println("NCR value" + ncr);

        input.close();
    }

}
