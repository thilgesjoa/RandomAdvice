public class PowerCalculator {
    public static void main(String[] args) {
        int base = 2;
        int exponent = 3;
        long result = 1;
        for (int i = 0; i < exponent; ++i) {
            result *= base;
        }
        System.out.println("2 to the power of 3 = " + result);
    }
}
