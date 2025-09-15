public class Loops {
    public static void main(String[] args) {
        int count = 1;

        if(count == 1 ){
            System.out.println("count is there!");
        }


        // when you dont know how many times the loop run
        while(count != 5){
            System.out.println(count);
            count++;
        }

        // when you know how many times the loop run

        for (int i = 0; i < 5; i++) {
            System.out.println(i);
        }
    }
}
