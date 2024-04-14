public class FibonacciWithLoop {
    public static void main(String[] args) {
        int n = 10;
        int a = 0, b = 1;
        System.out.println("Fibonacci series up to " + n + ":");
        for (int i = 0; i < n; i++) {
            System.out.print(a + " ");
            int sum = a + b;
            a = b;
            b = sum;
        }
    }
}
