const arg = process.argv[2];        // Get the first argument from command line
const number = parseInt(arg);       // Convert it to an integer

if (isNaN(number)) {                // Check if conversion failed
  console.log("Not a number");      // If not a number, print this
} else {
  console.log("My number: " + number); // If valid number, print this
}