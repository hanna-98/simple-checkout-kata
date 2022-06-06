# simple-checkout-kata

## TASK

Implement the code for a supermarket checkout that calculates the total price of a number of items.
In a normal supermarket, items are identified by ‘stock keeping units’ or ‘SKUs’. In our store, we will use individual letters of the alphabet, A, B, C
etc, as the SKUs. Our goods are priced individually. In addition, some items have promotions of any of the following types:

- Multi-priced: buy n of them and which will cost you y. For example, item A might cost 50 pence individually but this week we have a special offer where you can buy 3 As for £1.30.
- Buy n get 1 free

This week’s prices are the following:

| Item | Unit Price (in pence) | Special Price       |
| ---- | --------------------- | ------------------- |
| A    | 50                    |                     |
| B    | 75                    | 2 for £1.25         |
| C    | 25                    | Buy 3, get one free |

Our checkout accepts items in any order so if we scan a B, then an A, then another B, we will recognise the two B’s and apply the special
promotion of 2 for £1.25.

## TEST CASES

Your solution should work for the following test cases (there are no tricky edge cases):

- Test case 1 (no discount): ['C', ‘C', 'C'] => 0.75
- Test case 2 (no discount): ['A', ‘A', 'C'] => 1.25
- Test case 3 (2 for 1.25 discount applied): ['B', ‘B', 'B'] => 2.00
- Test case 4 (buy 3 get one free applied): ['C', C', ‘C', 'C'] => 0.75
- Test case 5 (2 for 1.25 discount AND buy 3 get one free applied): ['B', ‘B', 'C', C', ‘C', 'C'] = 2.00
