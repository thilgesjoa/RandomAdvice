public class OuterClass {
    private int outerValue = 10;

    public void outerMethod() {
        System.out.println("Outer method.");
    }

    class InnerClass {
        public void innerMethod() {
            System.out.println("Inner method. Outer value: " + outerValue);
        }
    }

    public static void main(String[] args) {
        OuterClass outer = new OuterClass();
        OuterClass.InnerClass inner = outer.new InnerClass();
        inner.innerMethod();
    }
}
