import java.util.Scanner;

public class ElectricityBill {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter Units");
        int unit = input.nextInt();
        float amount, surcharge, billAmt;
        
        if(unit <= 50){
            amount = unit * 0.50f;
        } else if (unit <= 150) {
            amount = unit * 0.75f;
        } else if (unit <= 250) {
            amount = unit * 1.20f;
        } else {
            amount = unit * 1.50f;
        }

        surcharge = amount * 0.f;
        billAmt = surcharge + amount;

        System.out.println("Total Electricity Bill: " + billAmt);
    }
}
