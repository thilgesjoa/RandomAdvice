import java.util.Scanner;

public class CarInfo {
    public static void main(String[] args) {
        // Create a Scanner object to read user input
        Scanner scanner = new Scanner(System.in);
        
        // Ask the user to input the car's make
        System.out.print("Please enter the car's make: ");
        String carMake = scanner.nextLine();
        
        // Ask the user to input the car's model
        System.out.print("Please enter the car's model: ");
        String carModel = scanner.nextLine();
        
        // Ask the user to input the car's year
        System.out.print("Please enter the car's year: ");
        int carYear = scanner.nextInt();
        
        // Ask the user to input the car's price
        System.out.print("Please enter the car's price: ");
        double carPrice = scanner.nextDouble();
        
        // Display the car information
        System.out.println("Car Make: " + carMake);
        System.out.println("Car Model: " + carModel);
        System.out.println("Car Year: " + carYear);
        System.out.println("Car Price: $" + carPrice);
        
        // Close the Scanner object
        scanner.close();
    }
}
