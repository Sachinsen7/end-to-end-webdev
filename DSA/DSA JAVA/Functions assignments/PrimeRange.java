public class PrimeRange {
    public static boolean isPrime(int n){
        if (n <= 1){
            return false;
        }
        for (int i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    static int[] primeRange(int m, int n){
        int[] temp = new int[n - m + 1];
        int index = 0;

        for (int i = m; i <= n; i++) {
            if(isPrime(i)){
                temp[index++] = i;
            }
        }

        int[] result = new int[index];
        System.arraycopy(temp, 0, result, 0, index);  // i dont what is this
        // 💡 Why this is used?
        //Because Java arrays are fixed-size.
        //You initially allocated temp with extra space.
        //Now, you only want to return the filled part (i.e., the primes), so you're copying only those into a new array result.

        return result;
    }
    public static void main(String[] args) {
        int m = 1, n = 10;

        int[] ans = primeRange(m, n);

        for(int i : ans){
            System.out.println(i);
        }
       
    }
}
