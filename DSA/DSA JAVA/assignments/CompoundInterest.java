import java.awt.print.Printable;
import java.security.Principal;

public class CompoundInterest {
    public static void main(String[] args) {
        // n: If you invest $1,000 at an annual interest rate of 5%, compounded annually, how much will your investment be worth after 10 years?
        int Principle = 1000;
        int timesCompoundInYears = 2;
        int time = 3; // year
        float rate = 5;
        double amount;

        amount = Principle * Math.pow((1 + (rate / 100 * timesCompoundInYears)), timesCompoundInYears * time);
        double CompoundInterest = amount - Principle;

        System.out.println("amount " + amount   );
        System.out.println("Compund Interest: " + CompoundInterest);
    }

}
