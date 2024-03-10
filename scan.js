import java.util.Scanner;

public class PrimeChecker {
    // Function to check if a number is prime
    public static boolean isPrime(int num) {
        // Prime numbers are greater than 1
        if (num <= 1) {
            return false;
        }
        // Check if the number is divisible by any number from 2 to its square root
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt the user to enter a number
        System.out.print("Enter a number: ");
        int number = scanner.nextInt();

        // Check if the number is prime and print the result
        if (isPrime(number)) {
            System.out.println(number + " is a prime number.");
        } else {
            System.out.println(number + " is not a prime number.");
        }

        scanner.close();
    }
}
