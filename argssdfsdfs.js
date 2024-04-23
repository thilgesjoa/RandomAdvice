public class ArrayContains {
    public static void main(String[] args) {
        int[] array = {10, 20, 30, 40, 50};
        int target = 30;
        boolean contains = false;
        for (int num : array) {
            if (num == target) {
                contains = true;
                break;
            }
        }
        if (contains) {
            System.out.println(target + " is present in the array.");
        } else {
            System.out.println(target + " is not present in the array.");
        }
    }
}
