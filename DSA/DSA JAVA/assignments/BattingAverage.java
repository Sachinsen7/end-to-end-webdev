import com.sun.source.util.DocTreeScanner;

import java.util.Scanner;

public class BattingAverage {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("enter number of hits");
        double numberHits = input.nextInt();

        System.out.println("Enter number of at-bats");
        double atBats = input.nextInt();
        double Average;

        Average = numberHits / atBats;
        System.out.println("Average Hits  " + (Average));




    }
}
