public class SecondLargestInArray {
    public static void main(String[] args) {
        int[] array = {10, 30, 20, 50, 40};
        int max1 = Integer.MIN_VALUE;
        int max2 = Integer.MIN_VALUE;
        for (int num : array) {
            if (num > max1) {
                max2 = max1;
                max1 = num;
            } else if (num > max2 && num != max1) {
                max2 = num;
            }
        }
        System.out.println("Second largest number in the array: " + max2);
    }
}
