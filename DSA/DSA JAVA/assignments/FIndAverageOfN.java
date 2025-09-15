import java.util.Scanner;

public class FIndAverageOfN {

    static float FIndAvgOfN(int n){
        return (float)(1 + n) / 2;
    }
    public static void main(String[] args) {
        int n = 20;
        System.out.println("Average " + FIndAvgOfN(n));
    }
}
