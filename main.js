// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:
//Create a function, validateCred() that has a parameter of an array.
const validateCred = function (arr) {
  //purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid. This function should NOT mutate the values of the original array.

  // Create a copy of the original array to avoid mutation
  const digits = array.slice();

  // Iterate from the second-to-last digit to the first digit
  for (let i = digits.length - 2; i >= 0; i -= 2) {
    let doubledDigit = digits[i] * 2;

    // If the doubled digit is greater than 9, subtract 9 from it
    if (doubledDigit > 9) {
      doubledDigit -= 9;
    }

    digits[i] = doubledDigit;
  }

  // Sum up all the digits in the credit card number
  const sum = digits.reduce((acc, curr) => acc + curr, 0);

  // Check if the sum modulo 10 is 0
  return sum % 10 === 0;
};
//The validateCred() function takes an array as input and returns true if the credit card number is valid according to the Luhn algorithm or false if it is invalid. The original array is not mutated during the validation process.

//Create another function, findInvalidCards() that has one parameter for a nested array of credit card numbers. The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.
const findInvalidCards = function (batch) {
  const invalidCards = [];

  for (let i = 0; i < batch.length; i++) {
    const card = batch[i];
    if (!validateCred(card)) {
      invalidCards.push(card);
    }
  }
  return invalidCards;
};
//This function uses the validateCred() function from the previous example to check each card in the nested array. If a card is invalid, it is added to the invalidCards array. Finally, the function returns the invalidCards array.
//You can use this function to find the invalid card numbers from the provided batch array or any other nested array of credit card numbers
//The findInvalidCards() function will return an array of invalid card numbers present in the batch array.
//validateCred() function should be and was defined before the findInvalidCards() function, or I need to ensure that the validateCred() function is available in the scope where findInvalidCards() is called.

//After finding all the invalid credit card numbers, it’s also necessary to identify the credit card companies that have possibly issued these faulty numbers. Create a function, idInvalidCardCompanies() that has one parameter for a nested array of invalid numbers and returns an array of companies.
//Currently, there are 4 accepted companies which each have unique first digits. The following shows which digit is unique to which company:
//3	Amex (American Express)
//4	Visa
//5	Mastercard
//6	Discover
//If the number doesn’t start with any of the numbers listed, print out a message like: “Company not found”.
//idInvalidCardCompanies() should return an array of companies that have mailed out cards with invalid numbers. This array should NOT contain duplicates, i.e. even if there are two invalid Visa cards, "Visa" should only appear once in the array.
function idInvalidCardCompanies(invalidCards) {
  const invalidCompanies = [];

  for (let i = 0; i < invalidCards.length; i++) {
    const card = invalidCards[i];
    const firstDigit = card[0];

    switch (firstDigit) {
      case 3:
        if (!invalidCompanies.includes("Amex")) {
          invalidCompanies.push("Amex");
        }
        break;
      case 4:
        if (!invalidCompanies.includes("Visa")) {
          invalidCompanies.push("Visa");
        }
        break;
      case 5:
        if (!invalidCompanies.includes("Mastercard")) {
          invalidCompanies.push("Mastercard");
        }
        break;
      case 6:
        if (!invalidCompanies.includes("Discover")) {
          invalidCompanies.push("Discover");
        }
        break;
      default:
        console.log("Company not found");
        break;
    }
  }
  return invalidCompanies;
}
//This function iterates over the nested array of invalid card numbers. For each card, it checks the first digit to determine the corresponding company that issued the card. If the company is not already included in the invalidCompanies array, it is added to the array. The function uses a switch statement to handle different first digits and ignores any numbers that don't match the known company digits.
//The idInvalidCardCompanies() function will return an array of unique company names that have issued the invalid card numbers. If a number doesn't start with any of the known digits, it will print the message "Company not found" to the console.
