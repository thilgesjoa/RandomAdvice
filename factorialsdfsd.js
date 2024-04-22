public class RecursiveFactorial {
    public static void main(String[] args) {
        int n = 5;
        int factorial = computeFactorial(n);
        System.out.println("Factorial of " + n + ": " + factorial);
    }

    public static int computeFactorial(int n) {
        if (n == 0 || n == 1) {
            return 1;
        } else {
            return n * computeFactorial(n - 1);
        }
    }
}
