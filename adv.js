def fibonacci_sequence(n):
    """Generate Fibonacci sequence up to n terms."""
    fib_sequence = [0, 1]
    while len(fib_sequence) < n:
        fib_sequence.append(fib_sequence[-1] + fib_sequence[-2])
    return fib_sequence

# Get the number of terms from the user
terms = int(input("Enter the number of terms in the Fibonacci sequence: "))

# Generate and print the Fibonacci sequence
print("Fibonacci sequence up to", terms, "terms:")
print(fibonacci_sequence(terms))
