import java.util.Scanner;

public class PalindromeString {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
//
        System.out.println("Enter a string: ");
        String word = input.nextLine();
        int n = word.length();
//
//        String reversed = "";
//
//        for (int i = n - 1; i >= 0; i--) {
//            reversed += word.charAt(i);
//        }
//
//        if(word.equals((reversed))){
//            System.out.println("Its a Palindrome");
//        } else{
//            System.out.println("Its not a palindrome");
//        }

        //+++++Another way

        int i = 0;
        int j = word.length() - 1;


        while (i < j){
            if(word.charAt(i) != word.charAt(j)) {
                System.out.println("not palindrome");
            }
            System.out.println("Its a palindrome");

            i++;
            j--;
        }
    }
}
