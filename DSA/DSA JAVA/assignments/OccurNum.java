public class OccurNum {
    public static void main(String[] args) {
        int num = 1356676;

        int count = 0;

        while(num > 0){
            int rem = num % 10;
            if(rem == 6){
                count++;
            }
            num /= 10;
        }
        System.out.println(count);
    }
}
