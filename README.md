# creditcard_checker
> Project Goals
Context: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. You’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. 


---

## Technologies Used

- JavaScript

---

## Project Requirements

  1. Create a function, validateCred() that has a parameter of an array. The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid. This function should NOT mutate the values of the original array. Use the Luhn algorithm to find out if a credit card number is valid or not.
  2. Create another function, findInvalidCards() that has one parameter for a nested array of credit card numbers. The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.
  3. After finding all the invalid credit card numbers, identify the credit card companies that have possibly issued these faulty numbers. Create a function, idInvalidCardCompanies() that has one parameter for a nested array of invalid numbers and returns an array of companies.
Currently, there are 4 accepted companies which each have unique first digits. Each specified digit is unique to each company.
If the number doesn’t start with any of the numbers listed, print out a message like: “Company not found”.
idInvalidCardCompanies() should return an array of companies that have mailed out cards with invalid numbers. This array should NOT contain duplicates, i.e. even if there are two invalid Visa cards, "Visa" should only appear once in the array.

---

## Next Steps

### (Planned Future Enhancements)

- Use different credit card numbers and test if your functions work for all types of credit cards.
- To make it easier to test credit card numbers, create a function that accepts a string and converts it into an array of numbers.
- Create a function that will convert invalid numbers into valid numbers.

---

##### Created as a project in the Front-End Engineer Career Paths course at Codecademy By Eunji Lee, 2023
 
