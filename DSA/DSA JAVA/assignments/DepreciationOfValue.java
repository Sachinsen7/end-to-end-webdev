import java.util.Scanner;

public class DepreciationOfValue {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter Cost of Asset: ");
        int costOfAsset = input.nextInt();

        System.out.println("Enter salvage value: ");
        int savlageValue = input.nextInt();

        System.out.println("Enter Years");
        int years = input.nextInt();
        int AnnualDepreciation;

        AnnualDepreciation = (costOfAsset - savlageValue) /  years;
        System.out.println("Your Annual Depreciation: " + AnnualDepreciation);

    }
}
