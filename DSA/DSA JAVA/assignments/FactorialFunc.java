public class FactorialFunc {

    
    
    static int factorialNum(int n){
        int res = 1;
        for (int i = 2; i <= n; i++) {
            res *= i;
        }
        return res;
    }
    public static void main(String[] args) {
        System.out.println("factorial of " + factorialNum(5));
    }
}
